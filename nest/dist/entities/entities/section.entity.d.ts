import { Model } from "sequelize-typescript";
export declare class EntitySection extends Model {
    id: number;
    name: string;
    entityTypeId: number;
    parentId: number;
    sort: number;
    deletedAt: Date;
}
