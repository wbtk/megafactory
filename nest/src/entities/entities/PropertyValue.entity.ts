import { BelongsTo, Column, DataType, Model, Table, BelongsToMany, DeletedAt, HasMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/entities/users.entity";
import { Property } from "./Property.entity";
import { EntitySection } from "./EntitySection.entity";
import { EntityItem } from "./EntityItem.entity";
import { EntityType } from "./EntityType.entity";

@Table
export class PropertyValue extends Model {

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 1, description: 'Сортировка'})
    @Column({type: DataType.INTEGER, defaultValue: 1})
    sort: number

    @ApiProperty({example: 1, description: 'Числовое значение'})
    @Column({type: DataType.INTEGER, allowNull: true})
    integer: number

    @ApiProperty({example: "Яблоко", description: 'Текстовое значение'})
    @Column({type: DataType.TEXT, allowNull: true})
    text: string

    @ApiProperty({example: {}, description: 'Значение json'})
    @Column({type: DataType.JSONB, allowNull: true})
    json: JSON

    @ApiProperty({example: 1, description: 'Значение из справочника'})
    @Column({type: DataType.INTEGER, allowNull: true})
    relation: string

    @ApiProperty({example: "['apple', 'samsung']", description: 'Значения из вариантов'})
    @Column({type: DataType.TEXT, allowNull: true})
    options: string[]

    @ApiProperty({example: 1, description: 'ID свойства'})
    @Column({type: DataType.INTEGER, allowNull: false})
    propertyId: number

    @ApiProperty({example: 1, description: 'ID справочника'})
    @Column({type: DataType.INTEGER, allowNull: false})
    entityTypeId: number

    @ApiProperty({example: 1, description: 'ID раздела справочника'})
    @Column({type: DataType.INTEGER, allowNull: true})
    entitySectionId: number

    @ApiProperty({example: 1, description: 'ID элемента справочника'})
    @Column({type: DataType.INTEGER, allowNull: true})
    entityItemId: number

    @ApiProperty({example: 1, description: 'ID создателя'})
    @Column({type: DataType.INTEGER, allowNull: false})
    creatorId: number

    @ApiProperty({example: 1, description: 'ID того кто удалил'})
    @Column({type: DataType.INTEGER, allowNull: true})
    destroyerId: number

    @DeletedAt
    deletedAt: Date

    @BelongsTo(() => Property, 'propertyId')
    property: Property 

    @BelongsTo(() => EntityType, 'entityTypeId')
    entityType: EntityType

    @BelongsTo(() => EntitySection, 'entitySectionId')
    entitySection: EntitySection

    @BelongsTo(() => EntityItem, 'entityItemId')
    entityItem: EntityItem

    @BelongsTo(() => User, 'creatorId')
    creator: User

    @BelongsTo(() => User, 'destroyerId')
    destroyer: User
    
}