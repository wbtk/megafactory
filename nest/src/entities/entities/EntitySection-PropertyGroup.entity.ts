import { Column, ForeignKey, Model, Table } from "sequelize-typescript"
import { ApiProperty } from "@nestjs/swagger"
import { EntitySection } from "./EntitySection.entity"
import { PropertyGroup } from "./PropertyGroup.entity"

@Table
export class EntitySectionPropertyGroup extends Model {

    @ForeignKey(() => EntitySection)
    @Column
    entitySectionId: number

    @ForeignKey(() => PropertyGroup)
    @Column
    propertyGroupId: number

}