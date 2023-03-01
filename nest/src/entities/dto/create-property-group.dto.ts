import { ApiProperty } from "@nestjs/swagger"
import {IsString, IsNumber} from "class-validator"

export class CreatePropertyGroupDto {

    @ApiProperty({example: 'Города', description: 'Название группы свойств'})
    @IsString({message: 'Должно быть строкой'})
    readonly name: string

    @ApiProperty({example: 1, description: 'Сортировка'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly sort: number

    @ApiProperty({example: [1], description: 'ID справочников'})
    //@IsNumber({}, {message: 'Должно быть числом'})
    readonly entityTypes: number[]

}