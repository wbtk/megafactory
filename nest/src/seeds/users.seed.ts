import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { User } from 'src/users/entities/users.entity';
import { genSaltSync, hashSync } from 'bcryptjs';
import Permission from 'src/users/permissions.type';

@Seeder({
   model: User,
   unique: ['email'],
})
export class SeedUser implements OnSeederInit {
   run() {
      const data = [
         {
            active: 1,
            lastname: 'Первушин',
            firstname: 'Валентин',
            patronymic: 'Викторович',
            email: '79052206060@ya.ru',
            password: '218061',
            permissions: Object.keys(Permission)
         },
         {
            active: 1,
            lastname: 'Тестовый',
            firstname: 'Директор',
            patronymic: '1',
            email: 'director@megafactory.ru',
            password: '153426',
         }
      ];
      return data;
   }

   // This function is optional!
   everyone(data) {
    console.log(data)
      // Encrypting the password for each user !
      if (data.password) {
         const salt = genSaltSync(10);
         data.password = hashSync(data.password, salt);
         data.salt = salt;
      }

      // Aggregated timestamps
      data.created_at = new Date().toISOString();
      data.updated_at = new Date().toISOString();

      return data; 
   }
}