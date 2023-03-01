import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { Role } from 'src/users/entities/roles.entity';
import Permission from 'src/users/permissions.type';

@Seeder({
   model: Role,
   unique: ['code'],
})
export class SeedUserRole implements OnSeederInit {
   run() {
      const data = [
         {
            name: 'Администратор',
            code: 'admin',
            description: 'Пользователь без ограничений в правах',
            permissions: Object.keys(Permission)
         },
         {
            name: 'Директор',
            code: 'director',
            description: '',
         }
      ];
      return data;
   }
}