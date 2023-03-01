import { ApiProperty } from "@nestjs/swagger"
import {IsString, IsNumber, IsDate, IsJSON} from "class-validator"

export class CreateDocumentDto {

    @ApiProperty({example: '01.01.2000 00:00:01', description: 'Дата и время документа'})
    @IsDate({message: 'Должно быть датой'})
    readonly date: Date

    @ApiProperty({example: 'order', description: 'Тип документа'})
    @IsString({message: 'Должно быть строкой'})
    readonly type: string

    @ApiProperty({example: 1, description: 'ID организации'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly organizationId: number

    @ApiProperty({example: 2, description: 'ID контрагента'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly contractorId: number

    @ApiProperty({example: 1, description: 'ID родительского документа'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly parentId: number

    @ApiProperty({example: 'new', description: 'Статус документа'})
    @IsString({message: 'Должно быть строкой'})
    readonly status: string

    @ApiProperty({example: {payDate: "01.01.2023"}, description: 'Дополнительные поля документа'})
    readonly properties: JSON

}
