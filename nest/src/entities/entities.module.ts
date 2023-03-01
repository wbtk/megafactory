import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

import { EntityType } from './entities/EntityType.entity';
import { EntitySection } from './entities/EntitySection.entity';
import { EntityItem } from './entities/EntityItem.entity';
import { PropertyGroup } from './entities/PropertyGroup.entity';
import { Property } from './entities/Property.entity';
import { PropertyValue } from './entities/PropertyValue.entity';

import { EntitySectionEntityItem } from './entities/EntitySection-EntityItem.entity';
import { EntityTypePropertyGroup } from './entities/EntityType-PropertyGroup.entity';

import { EntityTypesService } from './services/EntityTypes.service';
import { EntitySectionsService } from './services/EntitySections.service';
import { EntityItemsService } from './services/EntityItems.service';
import { PropertyGroupsService } from './services/PropertyGroups.service';
import { PropertiesService } from './services/Properties.service';
import { PropertyValuesService } from './services/PropertyValues.service';

import { EntityTypesController } from './controllers/EntityTypes.controller';
import { EntitySectionsController } from './controllers/EntitySections.controller';
import { EntityItemsController } from './controllers/EntityItems.controller';
import { PropertyGroupsController } from './controllers/PropertyGroups.controller';
import { PropertiesController } from './controllers/Properties.controller';
import { PropertyValuesController } from './controllers/PropertyValues.controller';
import { EntitySectionPropertyGroup } from './entities/EntitySection-PropertyGroup.entity';
import { EntityItemPropertyGroup } from './entities/EntityItem-PropertyGroup.entity';

@Module({
  controllers: [
    EntityTypesController,
    EntitySectionsController,
    EntityItemsController,
    PropertyGroupsController,
    PropertiesController,
    PropertyValuesController
  ],
  providers: [
    EntityTypesService, 
    EntitySectionsService, 
    EntityItemsService, 
    PropertyGroupsService,
    PropertiesService,
    PropertyValuesService
  ],
  imports: [
    SequelizeModule.forFeature([
      EntityType, 
      EntitySection, 
      EntityItem, 
      EntitySectionEntityItem,
      PropertyGroup,
      Property,
      PropertyValue,
      EntityTypePropertyGroup,
      EntitySectionPropertyGroup,
      EntityItemPropertyGroup
    ]),
    forwardRef(() => UsersModule),
    forwardRef(() => AuthModule)
  ],
  exports: [
    EntityTypesService,
    EntitySectionsService,
    EntityItemsService,
    PropertyGroupsService,
    PropertiesService,
    PropertyValuesService
  ],
})
export class EntitiesModule {}
