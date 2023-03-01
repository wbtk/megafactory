import { BelongsTo, Column, DataType, Model, Table, BelongsToMany, DeletedAt, HasMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { PropertyGroup } from "./PropertyGroup.entity";
import { User } from "src/users/entities/users.entity";
import { ARRAY, ENUM } from "sequelize";
import { PropertyValue } from "./PropertyValue.entity";
import { EntityType } from "./EntityType.entity";

export enum PropertyDataTypes {
    integer  = 'Число',
    text     = 'Текст',
    json     = 'Json',
    relation = 'Связь',
    options   = 'Опции'
}

export enum PropertyFormType {
    string   = 'Строка',
    text     = 'Текст',
    integer  = 'Число',
    price    = 'Цена',
    image    = 'Изображение',
    dropdown = 'Выпадающий список',
    json     = 'Json',
    checkbox = 'Чекбокс',
    radio    = 'Радио'
}

@Table
export class Property extends Model {

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'Ширина', description: 'Название свойства'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @ApiProperty({example: 'Заполняется вес товара', description: 'Описание свойства'})
    @Column({type: DataType.STRING, allowNull: true})
    description: string

    @ApiProperty({example: 1, description: 'Сортировка'})
    @Column({type: DataType.INTEGER, defaultValue: 1})
    sort: number

    @ApiProperty({example: 1, description: 'Тип свойства'})
    @Column({
        type: ARRAY(ENUM(...Object.keys(PropertyDataTypes))),
        allowNull: false
      })
    dataType: PropertyDataTypes

    @ApiProperty({example: 'string', description: 'Шаблон свойства'})
    @Column({
        type: ARRAY(ENUM(...Object.keys(PropertyFormType))),
        allowNull: false
      })
    formType: PropertyFormType

    @ApiProperty({example: 1, description: 'ID группы свойств'})
    @Column({type: DataType.INTEGER, allowNull: true}) 
    propertyGroupId: number

    @ApiProperty({example: '{"apple": "Apple", "samsung": "Samsung"}', description: 'Опции для выбора значения'})
    @Column({type: DataType.JSONB, allowNull: true})
    options: JSON

    @ApiProperty({example: '{"status": { "name": "", type: "text" }}', description: 'JSON шаблон'})
    @Column({type: DataType.JSONB, allowNull: true})
    json: JSON

    @ApiProperty({example: 'true', description: 'Активно'})
    @Column({type: DataType.BOOLEAN, defaultValue: true})
    active: boolean

    @ApiProperty({example: 'true', description: 'Обязательное'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    required: boolean

    @ApiProperty({example: 'true', description: 'Видимое'})
    @Column({type: DataType.BOOLEAN, defaultValue: true})
    visible: boolean

    @ApiProperty({example: 'true', description: 'Участвует в поиске'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    searchable: boolean

    @ApiProperty({example: 'true', description: 'Сортируемое'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    sortable: boolean

    @ApiProperty({example: 'true', description: 'Множественное'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    multiple: boolean

    @ApiProperty({example: 1, description: 'Связь с типом данных'})
    @Column({type: DataType.INTEGER, allowNull: true})
    relationTypeId: number

    @ApiProperty({example: 1, description: 'ID создателя'})
    @Column({type: DataType.INTEGER, allowNull: false})
    creatorId: number

    @ApiProperty({example: 1, description: 'ID того кто удалил'})
    @Column({type: DataType.INTEGER, allowNull: true})
    destroyerId: number

    @DeletedAt
    deletedAt: Date

    @BelongsTo(() => PropertyGroup, 'propertyGroupId')
    group: PropertyGroup

    @HasMany(() => PropertyValue, 'propertyId')
    values: PropertyValue[]

    @BelongsTo(() => EntityType, 'relationTypeId')
    relation: EntityType

    @BelongsTo(() => User, 'creatorId')
    creator: User

    @BelongsTo(() => User, 'destroyerId')
    destroyer: User

}