import { OnSeederInit } from 'nestjs-sequelize-seeder';
export declare class SeedUserRole implements OnSeederInit {
    run(): ({
        name: string;
        code: string;
        description: string;
        permissions: string[];
    } | {
        name: string;
        code: string;
        description: string;
        permissions?: undefined;
    })[];
}
