import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
  ) {}

  async getAllUsers() {
    const users = await this.userRepository.findAll({
      include: { all: true },
    });
    return users;
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByName('USER');
    await user.$set('roles', [role.id]);
    return user;
  }

  async getUserByUsername(username: string) {
    const user = await this.userRepository.findOne({
      where: { username },
      include: { all: true },
    });

    return user;
  }
}
