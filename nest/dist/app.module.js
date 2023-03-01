"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const nestjs_sequelize_seeder_1 = require("nestjs-sequelize-seeder");
const users_entity_1 = require("./users/entities/users.entity");
const roles_entity_1 = require("./users/entities/roles.entity");
const document_entity_1 = require("./documents/entities/document.entity");
const users_module_1 = require("./users/users.module");
const user_role_entity_1 = require("./users/entities/user-role.entity");
const auth_module_1 = require("./auth/auth.module");
const documents_module_1 = require("./documents/documents.module");
const organizations_module_1 = require("./organizations/organizations.module");
const tasks_module_1 = require("./tasks/tasks.module");
const stocks_module_1 = require("./stocks/stocks.module");
const entities_module_1 = require("./entities/entities.module");
const messages_module_1 = require("./messages/messages.module");
const files_module_1 = require("./files/files.module");
const file_entity_1 = require("./files/entities/file.entity");
const platform_express_1 = require("@nestjs/platform-express");
const EntityType_entity_1 = require("./entities/entities/EntityType.entity");
const EntitySection_entity_1 = require("./entities/entities/EntitySection.entity");
const EntityItem_entity_1 = require("./entities/entities/EntityItem.entity");
const EntitySection_EntityItem_entity_1 = require("./entities/entities/EntitySection-EntityItem.entity");
const EntityType_PropertyGroup_entity_1 = require("./entities/entities/EntityType-PropertyGroup.entity");
const PropertyGroup_entity_1 = require("./entities/entities/PropertyGroup.entity");
const EntitySection_PropertyGroup_entity_1 = require("./entities/entities/EntitySection-PropertyGroup.entity");
const EntityItem_PropertyGroup_entity_1 = require("./entities/entities/EntityItem-PropertyGroup.entity");
const organization_entity_1 = require("./organizations/entities/organization.entity");
const Property_entity_1 = require("./entities/entities/Property.entity");
const PropertyValue_entity_1 = require("./entities/entities/PropertyValue.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '123456',
                database: 'megafactory',
                models: [
                    users_entity_1.User,
                    roles_entity_1.Role,
                    user_role_entity_1.UserRole,
                    organization_entity_1.Organization,
                    document_entity_1.Document,
                    file_entity_1.File,
                    EntityType_entity_1.EntityType,
                    EntitySection_entity_1.EntitySection,
                    EntityItem_entity_1.EntityItem,
                    PropertyGroup_entity_1.PropertyGroup,
                    Property_entity_1.Property,
                    PropertyValue_entity_1.PropertyValue,
                    EntitySection_EntityItem_entity_1.EntitySectionEntityItem,
                    EntityType_PropertyGroup_entity_1.EntityTypePropertyGroup,
                    EntitySection_PropertyGroup_entity_1.EntitySectionPropertyGroup,
                    EntityItem_PropertyGroup_entity_1.EntityItemPropertyGroup
                ],
                autoLoadModels: true,
                synchronize: true,
            }),
            nestjs_sequelize_seeder_1.SeederModule.forRoot({
                runOnlyIfTableIsEmpty: true,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            documents_module_1.DocumentsModule,
            organizations_module_1.OrganizationsModule,
            tasks_module_1.TasksModule,
            stocks_module_1.StocksModule,
            entities_module_1.EntitiesModule,
            messages_module_1.MessagesModule,
            files_module_1.FilesModule,
            platform_express_1.MulterModule.register({
                dest: './storage',
            }),
        ],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map