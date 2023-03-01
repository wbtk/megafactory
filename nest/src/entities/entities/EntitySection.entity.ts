import { BelongsTo, Column, DataType, Model, Table, DeletedAt, BelongsToMany, HasMany, Scopes } from "sequelize-typescript"
import { ApiProperty } from "@nestjs/swagger"
import { EntitySectionEntityItem } from "./EntitySection-EntityItem.entity"
import { EntityItem } from "./EntityItem.entity"
import { EntityType } from "./EntityType.entity"
import { User } from "src/users/entities/users.entity"
import { PropertyGroup } from "./PropertyGroup.entity"
import { EntitySectionPropertyGroup } from "./EntitySection-PropertyGroup.entity"

@Table
@Scopes(() => ({
    sortered: {
        order: [['sort', 'ASC']]
    }
}))
export class EntitySection extends Model {

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'Продукция', description: 'Название раздела'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @ApiProperty({example: 1, description: 'Сортировка'})
    @Column({type: DataType.INTEGER, defaultValue: 1})
    sort: number

    @ApiProperty({example: 1, description: 'Идентификатор сравочника'})
    @Column({type: DataType.INTEGER, allowNull: false})
    entityTypeId: number

    @ApiProperty({example: 1, description: 'Идентификатор родительского раздела'})
    @Column({type: DataType.INTEGER, allowNull: true})
    parentId: number

    @ApiProperty({example: 1, description: 'ID создателя'})
    @Column({type: DataType.INTEGER, allowNull: false})
    creatorId: number

    @ApiProperty({example: 1, description: 'ID того кто удалил'})
    @Column({type: DataType.INTEGER, allowNull: true})
    destroyerId: number

    @DeletedAt
    deletedAt: Date;

    @BelongsTo(() => EntityType, 'entityTypeId')
    entityType: EntityType 

    @BelongsTo(() => EntitySection, 'parentId')
    parent: EntitySection

    @HasMany(() => EntitySection, 'parentId')
    childrens: EntitySection[]

    @BelongsToMany(() => EntityItem, () => EntitySectionEntityItem)
    items: EntityItem[]

    @BelongsToMany(() => PropertyGroup, () => EntitySectionPropertyGroup)
    propertyGroups: PropertyGroup[]

    @BelongsTo(() => User, 'creatorId')
    creator: User

    @BelongsTo(() => User, 'destroyerId') 
    destroyer: User

}
