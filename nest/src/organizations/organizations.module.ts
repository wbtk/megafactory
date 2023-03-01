import { forwardRef, Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { Organization } from './entities/organization.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
  imports: [
    SequelizeModule.forFeature([Organization]),
    forwardRef(() => UsersModule),
    forwardRef(() => AuthModule)
  ],
})
export class OrganizationsModule {}
