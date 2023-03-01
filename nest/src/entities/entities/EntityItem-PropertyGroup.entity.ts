import { Column, ForeignKey, Model, Table } from "sequelize-typescript"
import { ApiProperty } from "@nestjs/swagger"
import { EntityItem } from "./EntityItem.entity"
import { PropertyGroup } from "./PropertyGroup.entity"

@Table
export class EntityItemPropertyGroup extends Model {

    @ForeignKey(() => EntityItem)
    @Column
    entityItemId: number

    @ForeignKey(() => PropertyGroup)
    @Column
    propertyGroupId: number

}