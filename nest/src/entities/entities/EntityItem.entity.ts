import { BelongsTo, Column, DataType, Model, Table, DeletedAt, BelongsToMany } from "sequelize-typescript"
import { ApiProperty } from "@nestjs/swagger"
import { EntitySection } from "./EntitySection.entity"
import { EntitySectionEntityItem } from "./EntitySection-EntityItem.entity"
import { EntityType } from "./EntityType.entity"
import { User } from "src/users/entities/users.entity"
import { PropertyGroup } from "./PropertyGroup.entity"
import { EntityItemPropertyGroup } from "./EntityItem-PropertyGroup.entity"

@Table
export class EntityItem extends Model {

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'Продукт 1', description: 'Название элемента'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @ApiProperty({example: 1, description: 'Сортировка'})
    @Column({type: DataType.INTEGER, defaultValue: 1})
    sort: number

    @ApiProperty({example: 1, description: 'ID справочника'})
    @Column({type: DataType.INTEGER, allowNull: false})
    entityTypeId: number

    @ApiProperty({example: 1, description: 'ID создателя'})
    @Column({type: DataType.INTEGER, allowNull: false})
    creatorId: number

    @ApiProperty({example: 1, description: 'ID того кто удалил'})
    @Column({type: DataType.INTEGER, allowNull: true})
    destroyerId: number

    @DeletedAt
    deletedAt: Date

    @BelongsTo(() => EntityType, 'entityTypeId')
    entityType: EntityType

    @BelongsToMany(() => EntitySection, () => EntitySectionEntityItem)
    entitySections: EntitySection[]

    @BelongsToMany(() => PropertyGroup, () => EntityItemPropertyGroup)
    propertyGroups: PropertyGroup[]

    @BelongsTo(() => User, 'creatorId')
    creator: User

    @BelongsTo(() => User, 'delitorId')
    destroyer: User

}
