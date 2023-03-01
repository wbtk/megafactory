import { OnSeederInit } from "nestjs-sequelize-seeder";
export declare class SeedUserRoleUse implements OnSeederInit {
    run(): {
        roleId: number;
        userId: number;
        createdAt: string;
        updatedAt: string;
    }[];
}
