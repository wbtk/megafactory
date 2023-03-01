import { OnSeederInit, Seeder } from "nestjs-sequelize-seeder";
import { UserRole } from "src/users/entities/user-role.entity";

Seeder({
    model: UserRole,
    containsForeignKeys: true
 })
 export class SeedUserRoleUse implements OnSeederInit {
    run() {
       const data = [
          {
            roleId: 1,
            userId: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            roleId: 2,
            userId: 2,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
       ];
       return data;
    }
 }