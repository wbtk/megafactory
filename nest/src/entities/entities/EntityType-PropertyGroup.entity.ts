import { Column, ForeignKey, Model, Table } from "sequelize-typescript"
import { ApiProperty } from "@nestjs/swagger"
import { EntityType } from "./EntityType.entity"
import { PropertyGroup } from "./PropertyGroup.entity"

@Table
export class EntityTypePropertyGroup extends Model {

    @ForeignKey(() => EntityType)
    @Column
    entityTypeId: number

    @ForeignKey(() => PropertyGroup)
    @Column
    propertyGroupId: number

}