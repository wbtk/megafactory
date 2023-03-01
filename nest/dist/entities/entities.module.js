"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitiesModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("../users/users.module");
const auth_module_1 = require("../auth/auth.module");
const EntityType_entity_1 = require("./entities/EntityType.entity");
const EntitySection_entity_1 = require("./entities/EntitySection.entity");
const EntityItem_entity_1 = require("./entities/EntityItem.entity");
const PropertyGroup_entity_1 = require("./entities/PropertyGroup.entity");
const Property_entity_1 = require("./entities/Property.entity");
const PropertyValue_entity_1 = require("./entities/PropertyValue.entity");
const EntitySection_EntityItem_entity_1 = require("./entities/EntitySection-EntityItem.entity");
const EntityType_PropertyGroup_entity_1 = require("./entities/EntityType-PropertyGroup.entity");
const EntityTypes_service_1 = require("./services/EntityTypes.service");
const EntitySections_service_1 = require("./services/EntitySections.service");
const EntityItems_service_1 = require("./services/EntityItems.service");
const PropertyGroups_service_1 = require("./services/PropertyGroups.service");
const Properties_service_1 = require("./services/Properties.service");
const PropertyValues_service_1 = require("./services/PropertyValues.service");
const EntityTypes_controller_1 = require("./controllers/EntityTypes.controller");
const EntitySections_controller_1 = require("./controllers/EntitySections.controller");
const EntityItems_controller_1 = require("./controllers/EntityItems.controller");
const PropertyGroups_controller_1 = require("./controllers/PropertyGroups.controller");
const Properties_controller_1 = require("./controllers/Properties.controller");
const PropertyValues_controller_1 = require("./controllers/PropertyValues.controller");
const EntitySection_PropertyGroup_entity_1 = require("./entities/EntitySection-PropertyGroup.entity");
const EntityItem_PropertyGroup_entity_1 = require("./entities/EntityItem-PropertyGroup.entity");
let EntitiesModule = class EntitiesModule {
};
EntitiesModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            EntityTypes_controller_1.EntityTypesController,
            EntitySections_controller_1.EntitySectionsController,
            EntityItems_controller_1.EntityItemsController,
            PropertyGroups_controller_1.PropertyGroupsController,
            Properties_controller_1.PropertiesController,
            PropertyValues_controller_1.PropertyValuesController
        ],
        providers: [
            EntityTypes_service_1.EntityTypesService,
            EntitySections_service_1.EntitySectionsService,
            EntityItems_service_1.EntityItemsService,
            PropertyGroups_service_1.PropertyGroupsService,
            Properties_service_1.PropertiesService,
            PropertyValues_service_1.PropertyValuesService
        ],
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                EntityType_entity_1.EntityType,
                EntitySection_entity_1.EntitySection,
                EntityItem_entity_1.EntityItem,
                EntitySection_EntityItem_entity_1.EntitySectionEntityItem,
                PropertyGroup_entity_1.PropertyGroup,
                Property_entity_1.Property,
                PropertyValue_entity_1.PropertyValue,
                EntityType_PropertyGroup_entity_1.EntityTypePropertyGroup,
                EntitySection_PropertyGroup_entity_1.EntitySectionPropertyGroup,
                EntityItem_PropertyGroup_entity_1.EntityItemPropertyGroup
            ]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule)
        ],
        exports: [
            EntityTypes_service_1.EntityTypesService,
            EntitySections_service_1.EntitySectionsService,
            EntityItems_service_1.EntityItemsService,
            PropertyGroups_service_1.PropertyGroupsService,
            Properties_service_1.PropertiesService,
            PropertyValues_service_1.PropertyValuesService
        ],
    })
], EntitiesModule);
exports.EntitiesModule = EntitiesModule;
//# sourceMappingURL=entities.module.js.map