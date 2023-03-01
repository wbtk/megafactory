import Permission from '../permissions.type';
export declare class CreateUserDto {
    readonly lastname: string;
    readonly firstname: string;
    readonly patronymic: string;
    readonly email: string;
    readonly password: string;
    readonly permissions?: Permission[];
}
