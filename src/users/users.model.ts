import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreateAttrs {
    username: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreateAttrs> {

    @ApiProperty({ example: '1', description: 'unique primary key' })
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
    })
    id: number;


    @ApiProperty({ example: 'username', description: '' })
    @Column({
        type: DataType.STRING(20),
        unique: true,
        allowNull: false,
    })
    username: string;


    @ApiProperty({ example: 'password', description: '' })
    @Column({
        type: DataType.STRING(20),
        allowNull: false,
    })
    password: string;


    @ApiProperty({ example: false })
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    banned: boolean;


    @ApiProperty({ examples: [null, 'reason for blocking'], description: '' })
    @Column({
        type: DataType.STRING(100),
        allowNull: true,
    })
    banReason: string;
}