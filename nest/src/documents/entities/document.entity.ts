import { BelongsTo, Column, DataType, Model, Table, DeletedAt } from "sequelize-typescript"
import { ApiProperty } from "@nestjs/swagger"
import { User } from "src/users/entities/users.entity"
import { OPTIONS } from "../options/options"
import { Organization } from "src/organizations/entities/organization.entity"

@Table
export class Document extends Model {

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true}) 
    id: number

    @ApiProperty({example: 'true', description: 'Проведён'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    committed: boolean

    @ApiProperty({example: '01.01.2000 00:00:01', description: 'Дата и время документа'})
    @Column({type: DataType.DATE, defaultValue: Date.now})
    date: Date

    @ApiProperty({example: '1', description: 'Номер документа'})
    @Column({type: DataType.INTEGER, allowNull: false})
    number: number

    @ApiProperty({example: 'order', description: 'Тип документа'})
    @Column({type: DataType.ENUM, values: Object.keys(OPTIONS.types), allowNull: false})
    type: string

    @ApiProperty({example: '1', description: 'ID организации'})
    @Column({type: DataType.INTEGER, allowNull: true})
    organizationId: number

    @ApiProperty({example: '1', description: 'ID контрагента'})
    @Column({type: DataType.INTEGER, allowNull: true})
    contractorId: number

    @ApiProperty({example: '1', description: 'ID родительского документа'})
    @Column({type: DataType.INTEGER, allowNull: true})
    parentId: number

    @ApiProperty({example: 'framed', description: 'Статус документа'})
    @Column({type: DataType.STRING, allowNull: false})
    status: string

    @ApiProperty({example: '1', description: 'ID создателя'})
    @Column({type: DataType.INTEGER, defaultValue: 1})
    creatorId: number

    @ApiProperty({example: '1000', description: 'Сумма документа'})
    @Column({type: DataType.INTEGER, defaultValue: 0})
    amount: number

    @ApiProperty({example: '1', description: 'Сортировка документа'})
    @Column({type: DataType.INTEGER, allowNull: true})
    sort: number

    @ApiProperty({example: {}, description: 'Дополнительные поля документа'})
    @Column({type: DataType.JSONB, allowNull: true})
    properties: JSON

    @DeletedAt
    deletedAt: Date;

    @BelongsTo(() => User, 'creatorId')
    creator: User

    @BelongsTo(() => Organization, 'organizationId')
    organization: Organization

    @BelongsTo(() => Organization, 'contractorId')
    contractor: Organization
}