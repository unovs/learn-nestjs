import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreateUserDto) {}

  async register(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByUsername(
      userDto.username,
    );

    if (candidate) {
      throw new HttpException(
        `User with username ${candidate.username} is exist`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(userDto.password, 6);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  async generateToken(user: User) {
    const payload = { username: user.username, id: user.id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
