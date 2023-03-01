import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer";
import {IsNotEmpty, IsString, IsEnum, IsArray, IsOptional} from "class-validator";
import Permission from '../permissions.type';

export class CreateRoleDto {

    @ApiProperty({example: 'Администратор', description: 'Название роли'})
    @IsString({message: 'Должно быть строкой'})
    readonly name: string;

    @ApiProperty({example: 'admin', description: 'Символьный код роли'})
    @IsString({message: 'Должно быть строкой'})
    readonly сode: string;

    @ApiProperty({example: 'Пользователь без ограничений в правах', description: 'Описание роли'})
    @IsString({message: 'Должно быть строкой'})
    readonly description: string;

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