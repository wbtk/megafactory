import { Model } from "sequelize-typescript";
import { Role } from "./roles.entity";
import Permission from '../permissions.type';
import { File } from "src/files/entities/file.entity";
export declare class User extends Model {
    id: number;
    email: string;
    lastname: string;
    firstname: string;
    patronymic: string;
    password: string;
    isActive: boolean;
    permissions: Permission[];
    roles: Role[];
    deletedAt: Date;
    files: File[];
}
