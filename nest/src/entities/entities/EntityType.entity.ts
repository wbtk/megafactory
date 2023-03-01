import { BelongsTo, Column, DataType, Model, Table, DeletedAt, BelongsToMany } from "sequelize-typescript"
import { ApiProperty } from "@nestjs/swagger"
import { EntityTypePropertyGroup } from "./EntityType-PropertyGroup.entity"
import { PropertyGroup } from "./PropertyGroup.entity"
import { User } from "src/users/entities/users.entity"

@Table
export class EntityType extends Model {

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'Продукция', description: 'Название справочника'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @ApiProperty({example: 1, description: 'ID родительского справочника'})
    @Column({type: DataType.INTEGER, allowNull: true})
    parentEntityTypeId: number

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

    @BelongsToMany(() => PropertyGroup, () => EntityTypePropertyGroup)
    propertyGroups: PropertyGroup[]

    @BelongsTo(() => User, 'creatorId')
    creator: User

    @BelongsTo(() => User, 'destroyerId')
    destroyer: User

}
