import { ApiProperty } from "@nestjs/swagger"
import {IsString, IsNumber, IsJSON, MinLength} from "class-validator"

export class CreatePropertyValueDto {

    @ApiProperty({example: 100, description: 'Числовое значение свойства'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly integer: number

    @ApiProperty({example: '100 см', description: 'Текстовое значение свойства'})
    @IsString({message: 'Должно быть строкой'})
    readonly text: string

    @ApiProperty({example: {city: 'Санкт-Петербург'}, description: 'JSON значение свойства'})
    @IsJSON({message: 'Должно быть json'})
    readonly json: JSON

    @ApiProperty({example: 100, description: 'Связующее значение свойства (ID справочника)'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly relation: number

    @ApiProperty({example: "['apple', 'samsung']", description: 'Опционное значение свойства'})
    @IsString({message: 'Должно быть строкой'})
    readonly options: string[]

    @ApiProperty({example: 1, description: 'ID свойства'})
    @IsNumber({}, {message: 'Должно быть числом'}) 
    readonly propertyId: number

    @ApiProperty({example: 1, description: 'ID справочника'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly entityTypeId: number

    @ApiProperty({example: 1, description: 'ID раздела справочника'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly entitySectionId: number

    @ApiProperty({example: 1, description: 'ID элемента справочника'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly entityItemId: number

    @ApiProperty({example: 1, description: 'Сортировка'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly sort: number

}