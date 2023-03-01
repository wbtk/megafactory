import { BelongsToMany, HasMany, Column, DataType, Model, Table, DeletedAt, PrimaryKey, AutoIncrement, Unique, DefaultScope } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger"
import { UserRole } from "./user-role.entity";
import { Role } from "./roles.entity";
import Permission from '../permissions.type';
import { ARRAY, ENUM } from "sequelize";
import { File } from "src/files/entities/file.entity";

@DefaultScope(() => ({
  //attributes: {exclude: ['password']}
}))
@Table
export class User extends Model {

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column({type: DataType.INTEGER})
    id: number

    @ApiProperty({example: 'user@mail.ru', description: 'Email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @ApiProperty({example: 'Иванов', description: 'Фамилия'})
    @Column({type: DataType.STRING, allowNull: false})
    lastname: string

    @ApiProperty({example: 'Иван', description: 'Имя'})
    @Column({type: DataType.STRING, allowNull: false})
    firstname: string

    @ApiProperty({example: 'Иванович', description: 'Отчество'})
    @Column({type: DataType.STRING, allowNull: true})
    patronymic: string 

    @ApiProperty({example: '123456', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string 

    @ApiProperty({example: 'true', description: 'Активирован'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isActive: boolean

    @ApiProperty({example: '["CreateOrder"]', description: 'Массив прав пользователя'})
    @Column({
      type: ARRAY(ENUM(...Object.keys(Permission))),
      defaultValue: []
    })
    permissions: Permission[]

    @BelongsToMany(() => Role, () => UserRole)
    roles: Role[]

    @DeletedAt
    deletedAt: Date;

    @HasMany(() => File, "creatorId")
    files: File[];

}