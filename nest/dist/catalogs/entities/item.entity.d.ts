import { Model } from "sequelize-typescript";
import { CatalogSection } from "./section.entity";
export declare class CatalogItem extends Model {
    id: number;
    name: string;
    sort: number;
    sections: CatalogSection[];
    properties: JSON;
    deletedAt: Date;
}
