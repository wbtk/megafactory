import { ApiProperty } from "@nestjs/swagger"
import {IsString, IsNumber, IsDate, IsJSON} from "class-validator"

export class CreateEntityTypeDto {

    @ApiProperty({example: 'Города', description: 'Название справочника'})
    @IsString({message: 'Должно быть строкой'})
    readonly name: string

    @ApiProperty({example: 1, description: 'ID родительского справочника'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly parentEntityTypeId: number

    @ApiProperty({example: 1, description: 'Сортировка'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly sort: number

}
