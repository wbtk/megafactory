import { ApiProperty } from "@nestjs/swagger"
import {IsString, IsNumber} from "class-validator"

export class CreateEntitySectionDto {

    @ApiProperty({example: 'Города', description: 'Название раздела справочника'})
    @IsString({message: 'Должно быть строкой'})
    readonly name: string

    @ApiProperty({example: 1, description: 'ID справочника'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly parentEntityTypeId: number

    @ApiProperty({example: 1, description: 'ID родительского раздела справочника'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly parentEntitySectionId: number

    @ApiProperty({example: 1, description: 'Сортировка'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly sort: number

}
