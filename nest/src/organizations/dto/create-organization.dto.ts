import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNumber, IsDate, IsNotEmpty } from "class-validator"

export class CreateOrganizationDto {

    @ApiProperty({example: 'ООО "РАГА И КАПЫТА"', description: 'Название организации'})
    @IsString({message: 'Должно быть строкой'})
    readonly name: string

    @ApiProperty({example: 1, description: 'Активность'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly active: number

    @ApiProperty({example: 1, description: 'Собственная организация'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly own: number

    @IsNotEmpty()
    @ApiProperty({example: 22323550090, description: 'ИНН'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly inn: number

}
