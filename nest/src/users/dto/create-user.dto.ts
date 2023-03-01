import { ApiProperty } from "@nestjs/swagger"
import {IsArray, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length} from "class-validator";
import Permission from '../permissions.type';
import { IsUserAlreadyExist } from "src/auth/decorators/is-email-registered.decorator";

export class CreateUserDto {

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
    @IsEmail()
    readonly email: string

    @ApiProperty({example: '123456', description: 'Пароль'})
    @IsString({message: 'Должно быть строкой'})
    readonly password: string

    @IsNotEmpty()
    @IsOptional()
    @IsArray()
    @IsEnum(Object.keys(Permission), {each: true})
    @ApiProperty({
        example: 'Права роли', 
        description: 'Список прав у роли', 
        isArray: true,
        required: false,
        enum: Permission
    })
    readonly permissions?: Permission[];
    
}