import { Model } from "sequelize-typescript";
import { User } from "src/users/entities/users.entity";
export declare class Organization extends Model {
    id: number;
    active: boolean;
    own: boolean;
    name: string;
    inn: string;
    creatorId: number;
    deletedAt: Date;
    creator: User;
}
