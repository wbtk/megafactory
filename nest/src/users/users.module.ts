import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SeedUser } from 'src/seeds/users.seed';
import { SeedUserRole } from 'src/seeds/roles.seed';
import { SeedUserRoleUse } from 'src/seeds/user-role.seed'; 
import { UsersController } from './users.controller';
import { User } from './entities/users.entity';
import { Role } from './entities/roles.entity';
import { UsersService } from './users.service';
import { UserRole } from 'src/users/entities/user-role.entity';
import { AuthModule } from 'src/auth/auth.module';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
  controllers: [UsersController, RolesController],
  providers: [UsersService, RolesService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRole]),
    forwardRef(() => AuthModule),
    SeederModule.forFeature([SeedUser]),
    SeederModule.forFeature([SeedUserRole]),
  ],
  exports: [UsersService, RolesService]
})

export class UsersModule {}
