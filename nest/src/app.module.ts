import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { User } from './users/entities/users.entity';
import { Role } from './users/entities/roles.entity';
import { Document } from './documents/entities/document.entity';
import { UsersModule } from './users/users.module';
import { UserRole } from './users/entities/user-role.entity';
import { AuthModule } from './auth/auth.module';
import { DocumentsModule } from './documents/documents.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { TasksModule } from './tasks/tasks.module';
import { StocksModule } from './stocks/stocks.module';
import { EntitiesModule } from './entities/entities.module';
import { MessagesModule } from './messages/messages.module';
import { FilesModule } from './files/files.module';
import { File } from './files/entities/file.entity';
import { MulterModule } from '@nestjs/platform-express';
import { EntityType } from './entities/entities/EntityType.entity';
import { EntitySection } from './entities/entities/EntitySection.entity';
import { EntityItem } from './entities/entities/EntityItem.entity';
import { EntitySectionEntityItem } from './entities/entities/EntitySection-EntityItem.entity';
import { EntityTypePropertyGroup } from './entities/entities/EntityType-PropertyGroup.entity';
import { PropertyGroup } from './entities/entities/PropertyGroup.entity';
import { EntitySectionPropertyGroup } from './entities/entities/EntitySection-PropertyGroup.entity';
import { EntityItemPropertyGroup } from './entities/entities/EntityItem-PropertyGroup.entity';
import { Organization } from './organizations/entities/organization.entity';
import { Property } from './entities/entities/Property.entity';
import { PropertyValue } from './entities/entities/PropertyValue.entity';

@Module({
  controllers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'megafactory',
      models: [
        User,
        Role,
        UserRole,
        Organization,
        Document,
        File,
        EntityType,
        EntitySection,
        EntityItem,
        PropertyGroup,
        Property,
        PropertyValue,
        EntitySectionEntityItem,
        EntityTypePropertyGroup,
        EntitySectionPropertyGroup,
        EntityItemPropertyGroup
      ],
      autoLoadModels: true,
      synchronize: true,
    }),
    SeederModule.forRoot({
      runOnlyIfTableIsEmpty: true,
    }),
    UsersModule,
    AuthModule,
    DocumentsModule,
    OrganizationsModule,
    TasksModule,
    StocksModule,
    EntitiesModule,
    MessagesModule,
    FilesModule,
    MulterModule.register({
      dest: './storage',
    }),
  ],
  providers: [],
})
export class AppModule {}
