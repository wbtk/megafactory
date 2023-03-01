import { Model } from "sequelize-typescript";
export declare class Entity extends Model {
    id: number;
    name: string;
    sort: number;
    properties: JSON;
    deletedAt: Date;
}
