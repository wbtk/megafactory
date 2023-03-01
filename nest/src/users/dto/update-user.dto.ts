import { ApiProperty } from "@nestjs/swagger"
import {IsBoolean, IsEmail, IsNumber, IsString, Length} from "class-validator";

export class UpdateUserDto {

    @ApiProperty({example: '1', description: 'Активирован'})
    @IsBoolean({message: 'Должно быть 0 или 1'})
    readonly active: boolean

    @ApiProperty({example: 'Иванов', description: 'Фамилия'})
    @IsString({message: 'Должно быть строкой'})
    readonly lastname: string

    @ApiProperty({example: 'Иван', description: 'Имя'})
    @IsString({message: 'Должно быть строкой'})
    readonly firstname: string

    @ApiProperty({example: 'Иванович', description: 'Отчество'})
    @IsString({message: 'Должно быть строкой'})
    readonly patronymic: string

    @ApiProperty({example: 'user@mail.ru', description: 'Email'})
    @IsString({message: 'Должно быть строкой'})
    readonly email: string

    @ApiProperty({example: '123456', description: 'Пароль'})
    @Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
    readonly password: string
    
}