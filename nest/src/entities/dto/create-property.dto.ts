import { ApiProperty } from "@nestjs/swagger"
import {IsString, IsNumber, IsEnum, IsNotEmpty, IsBoolean} from "class-validator"
import { PropertyDataTypes } from "../entities/Property.entity"
import { PropertyFormType } from "../entities/Property.entity" 

export class CreatePropertyDto {

    @ApiProperty({example: 'Ширина', description: 'Название свойства'})
    @IsString({message: 'Должно быть строкой'})
    readonly name: string

    @ApiProperty({example: 'Указывается ширина в мм', description: 'Описание свойства'})
    @IsString({message: 'Должно быть строкой'})
    readonly description: string

    @ApiProperty({example: 1, description: 'Сортировка'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly sort: number

    @ApiProperty({example: 1, description: 'Тип свойства'})
    @IsEnum(Object.keys(PropertyDataTypes), {each: true})
    readonly dataType: PropertyDataTypes

    @ApiProperty({example: 'string', description: 'Название шаблона вывода'})
    @IsEnum(Object.keys(PropertyFormType), {each: true})
    readonly formType: PropertyFormType

    @ApiProperty({example: 1, description: 'Связь с типом данных (ID справочника)'})
    @IsNotEmpty()
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly relationTypeId: number

    @ApiProperty({example: '{"apple": "Apple", "samsung": "Samsung"}', description: 'Опции'})
    readonly options: JSON

    @ApiProperty({example: '{"status": { "name": "", type: "text" }}', description: 'JSON шаблон'})
    readonly json: JSON

    @ApiProperty({example: 1, description: 'ID разделов'})
    @IsNotEmpty()
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly propertyGroupId: number

    @ApiProperty({example: true, description: 'Активно'})
    @IsNotEmpty()
    @IsBoolean({message: 'Должно быть boolean'})
    readonly active: boolean

    @ApiProperty({example: false, description: 'Обязательное'})
    @IsNotEmpty()
    @IsBoolean({message: 'Должно быть boolean'})
    readonly required: boolean

    @ApiProperty({example: true, description: 'Видимое'})
    @IsNotEmpty()
    @IsBoolean({message: 'Должно быть boolean'})
    readonly visible: boolean

    @ApiProperty({example: false, description: 'Участвует в поиске'})
    @IsNotEmpty()
    @IsBoolean({message: 'Должно быть boolean'})
    readonly searchable: boolean

    @ApiProperty({example: false, description: 'Сортируемое'})
    @IsNotEmpty()
    @IsBoolean({message: 'Должно быть boolean'})
    readonly sortable: boolean

    @ApiProperty({example: false, description: 'Множественное'})
    @IsNotEmpty()
    @IsBoolean({message: 'Должно быть boolean'})
    readonly multiple: boolean

}
