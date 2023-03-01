import { Model } from "sequelize-typescript";
import { User } from "src/users/entities/users.entity";
export declare class File extends Model {
    id: number;
    filename: string;
    path: string;
    size: string;
    mimetype: string;
    module: string;
    entity: string;
    entityId: number;
    field: string;
    creatorId: number;
    creator: User;
    sort: number;
}
