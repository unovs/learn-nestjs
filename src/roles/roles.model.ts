import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { RolesUser } from './roles-user.model';

interface RoleCreateAttrs {
  name: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreateAttrs> {
  @ApiProperty({ example: '1', description: 'unique primary key' })
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name: string;

  @BelongsToMany(() => User, () => RolesUser)
  roles: Role[];
}
