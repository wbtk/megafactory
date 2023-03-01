import { Column, ForeignKey, Model, Table } from "sequelize-typescript"
import { ApiProperty } from "@nestjs/swagger"
import { EntitySection } from "./EntitySection.entity"
import { EntityItem } from "./EntityItem.entity"

@Table
export class EntitySectionEntityItem extends Model {

    @ForeignKey(() => EntitySection)
    @Column
    entitySectionId: number

    @ForeignKey(() => EntityItem)
    @Column
    entityItemId: number

}