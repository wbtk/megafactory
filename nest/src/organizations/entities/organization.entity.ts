import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, Model, Table, DeletedAt } from "sequelize-typescript"
import { User } from "src/users/entities/users.entity";

@Table
export class Organization extends Model {

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 1, description: 'Активность'})
    @Column({type: DataType.BOOLEAN, defaultValue: true})
    active: boolean

    @ApiProperty({example: 1, description: 'Отметка что организация является собвственной'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    own: boolean

    @ApiProperty({example: 'ООО "Рага и капыта"', description: 'Название организации'})
    @Column({type: DataType.TEXT, allowNull: false})
    name: string

    @ApiProperty({example: '78142311754302"', description: 'ИНН'})
    @Column({type: DataType.TEXT, unique: true, allowNull: true})
    inn: string

    @ApiProperty({example: 1, description: 'ID создателя'})
    @Column({type: DataType.INTEGER, allowNull: false})
    creatorId: number

    @DeletedAt
    deletedAt: Date

    @BelongsTo(() => User, 'creatorId')
    creator: User

}
