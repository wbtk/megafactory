import { BelongsTo, Column, DataType, Model, Table, BelongsToMany, DeletedAt, HasMany } from "sequelize-typescript"
import { ApiProperty } from "@nestjs/swagger"
import { EntityType } from "./EntityType.entity"
import { EntitySection } from "./EntitySection.entity"
import { EntityItem } from "./EntityItem.entity"
import { EntityTypePropertyGroup } from "./EntityType-PropertyGroup.entity"
import { EntitySectionPropertyGroup } from "./EntitySection-PropertyGroup.entity"
import { EntityItemPropertyGroup } from "./EntityItem-PropertyGroup.entity"
import { User } from "src/users/entities/users.entity"
import { Property } from "./Property.entity"

@Table
export class PropertyGroup extends Model {

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'Информация', description: 'Название группы свойств'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @ApiProperty({example: 1, description: 'Сортировка'})
    @Column({type: DataType.INTEGER, defaultValue: 1})
    sort: number

    @ApiProperty({example: 1, description: 'ID создателя'})
    @Column({type: DataType.INTEGER, allowNull: false})
    creatorId: number

    @ApiProperty({example: 1, description: 'ID того кто удалил'})
    @Column({type: DataType.INTEGER, allowNull: true}) 
    destroyerId: number

    @DeletedAt
    deletedAt: Date

    @HasMany(() => Property, 'propertyGroupId')
    properties: Property[]

    @BelongsToMany(() => EntityType, () => EntityTypePropertyGroup)
    entityTypes: EntityType[]

    @BelongsToMany(() => EntitySection, () => EntitySectionPropertyGroup)
    entitySections: EntitySection[]

    @BelongsToMany(() => EntityItem, () => EntityItemPropertyGroup)
    entityItems: EntityItem[]

    @BelongsTo(() => User, 'creatorId')
    creator: User

    @BelongsTo(() => User, 'destroyerId')
    destroyer: User
    
}
