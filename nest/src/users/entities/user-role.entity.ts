import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "./users.entity";
import {Role} from "./roles.entity";

@Table
export class UserRole extends Model {

    @ForeignKey(() => Role)
    @Column
    roleId: number;

    @ForeignKey(() => User)
    @Column
    userId: number;

}