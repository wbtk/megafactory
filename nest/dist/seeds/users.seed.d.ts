import { OnSeederInit } from 'nestjs-sequelize-seeder';
export declare class SeedUser implements OnSeederInit {
    run(): ({
        active: number;
        lastname: string;
        firstname: string;
        patronymic: string;
        email: string;
        password: string;
        permissions: string[];
    } | {
        active: number;
        lastname: string;
        firstname: string;
        patronymic: string;
        email: string;
        password: string;
        permissions?: undefined;
    })[];
    everyone(data: any): any;
}
