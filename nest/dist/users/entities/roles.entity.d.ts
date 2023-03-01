import { Model } from "sequelize-typescript";
import { User } from "./users.entity";
import Permission from '../permissions.type';
export declare class Role extends Model {
    name: string;
    code: string;
    description: string;
    permissions: Permission[];
    users: User[];
}
