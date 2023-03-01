import { Model } from "sequelize-typescript";
import { User } from "src/users/entities/users.entity";
import { Organization } from "src/organizations/entities/organization.entity";
export declare class Document extends Model {
    id: number;
    committed: boolean;
    date: Date;
    number: number;
    type: string;
    organizationId: number;
    contractorId: number;
    parentId: number;
    status: string;
    creatorId: number;
    amount: number;
    sort: number;
    properties: JSON;
    deletedAt: Date;
    creator: User;
    organization: Organization;
    contractor: Organization;
}
