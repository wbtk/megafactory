import { ApiProperty } from "@nestjs/swagger"
import {IsString, IsNumber, IsArray, IsNotEmpty} from "class-validator"
import { EntitySection } from "../entities/EntitySection.entity"

export class CreateEntityItemDto {

    @ApiProperty({example: 'Города', description: 'Название элемента справочника'})
    @IsString({message: 'Должно быть строкой'})
    readonly name: string

    @ApiProperty({example: 1, description: 'Сортировка'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly sort: number

    @ApiProperty({example: 1, description: 'ID справочника'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly parentEntityTypeId: number

    @ApiProperty({example: 1, description: 'ID разделов'})
    @IsNotEmpty()
    readonly entitySectionIds: EntitySection[]

}
