import {IsNumber} from "class-validator";

export class AddRoleDto {
    @IsNumber({}, {message: "Должно быть числом"})
    readonly roleId: number;
    @IsNumber({}, {message: "Должно быть числом"})
    readonly userId: number;
}