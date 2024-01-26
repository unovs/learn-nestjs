import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: 'users' })
export class User extends Model<User> {
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
    })
    id: number;

    @Column({
        type: DataType.STRING(20),
        unique: true,
        allowNull: false,
    })
    username: string;

    @Column({
        type: DataType.STRING(20),
        allowNull: false,
    })
    password: string;
}