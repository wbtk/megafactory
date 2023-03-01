import Permission from '../permissions.type';
export declare class CreateRoleDto {
    readonly name: string;
    readonly сode: string;
    readonly description: string;
    readonly permissions?: Permission[];
}
