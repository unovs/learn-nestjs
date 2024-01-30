import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'username',
    description: 'This field required is unique name for user',
  })
  readonly username: string;

  @ApiProperty({
    example: 'password',
    description:
      'This field range from 6 to 20 symbols for protect user accounts',
  })
  readonly password: string;
}
