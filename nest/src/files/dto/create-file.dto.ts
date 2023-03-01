import { ApiProperty } from "@nestjs/swagger"
import {IsString, IsNumber, IsDate, IsJSON} from "class-validator"

export class CreateFileDto {

    @ApiProperty({example: 'icon', description: 'Название файла'})
    @IsString({message: 'Должно быть строкой'})
    filename: string

    @ApiProperty({example: 'icon', description: 'Путь до файла'})
    @IsString({message: 'Должно быть строкой'})
    path: string

    @ApiProperty({example: 'icon', description: 'Размер файла'})
    @IsString({message: 'Должно быть строкой'})
    size: string

    @ApiProperty({example: 'icon', description: 'Mimetype до файла'})
    @IsString({message: 'Должно быть строкой'})
    mimetype: string

    @ApiProperty({example: 'documents', description: 'Файл модуля'})
    @IsString({message: 'Должно быть строкой'})
    module: string

    @ApiProperty({example: 'documents', description: 'Файл объекта'})
    @IsString({message: 'Должно быть строкой'})
    entity: string

    @ApiProperty({example: 1, description: 'ID объекта'})
    //@IsNumber({}, {message: 'Должно быть числом'})
    entityId: number

    @ApiProperty({example: 'preview', description: 'Поле объекта'})
    @IsString({message: 'Должно быть строкой'})
    field: string

}
