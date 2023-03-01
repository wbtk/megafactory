import { ApiProperty } from "@nestjs/swagger"
import {IsEmail, IsString, Length} from "class-validator";

export class AuthUserDto {

    @ApiProperty({example: 'user@mail.ru', description: 'Email'})
    @IsString({message: 'Должно быть строкой'})
    readonly email: string

    @ApiProperty({example: '123456', description: 'Пароль'})
    readonly password: string
    
}