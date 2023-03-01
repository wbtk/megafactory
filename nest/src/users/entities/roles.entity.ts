import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ARRAY, ENUM } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import {User} from "./users.entity";
import {UserRole} from "./user-role.entity";
import Permission from '../permissions.type';

@Table
export class Role extends Model { 

    @ApiProperty({example: 'Администратор', description: 'Название роли'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    name: string

    @ApiProperty({example: 'admin', description: 'Символьный код'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    code: string

    @ApiProperty({example: 'Роль администратора системы', description: 'Описание роли'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    description: string

    @Column({
      type: ARRAY(ENUM(...Object.keys(Permission))),
      defaultValue: []
    })
    permissions: Permission[]

    @BelongsToMany(() => User, () => UserRole)
    users: User[]
    
}