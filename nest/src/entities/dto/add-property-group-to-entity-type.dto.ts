import {IsNumber} from "class-validator";

export class AddPropertyGroupToEntityTypeDto {
    @IsNumber({}, {message: "Должно быть числом"})
    readonly propertyGroupId: number;
    @IsNumber({}, {message: "Должно быть числом"})
    readonly entityTypeId: number;
}