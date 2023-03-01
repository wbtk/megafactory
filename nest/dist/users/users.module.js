"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const nestjs_sequelize_seeder_1 = require("nestjs-sequelize-seeder");
const users_seed_1 = require("../seeds/users.seed");
const roles_seed_1 = require("../seeds/roles.seed");
const users_controller_1 = require("./users.controller");
const users_entity_1 = require("./entities/users.entity");
const roles_entity_1 = require("./entities/roles.entity");
const users_service_1 = require("./users.service");
const user_role_entity_1 = require("./entities/user-role.entity");
const auth_module_1 = require("../auth/auth.module");
const roles_controller_1 = require("./roles.controller");
const roles_service_1 = require("./roles.service");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController, roles_controller_1.RolesController],
        providers: [users_service_1.UsersService, roles_service_1.RolesService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([users_entity_1.User, roles_entity_1.Role, user_role_entity_1.UserRole]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            nestjs_sequelize_seeder_1.SeederModule.forFeature([users_seed_1.SeedUser]),
            nestjs_sequelize_seeder_1.SeederModule.forFeature([roles_seed_1.SeedUserRole]),
        ],
        exports: [users_service_1.UsersService, roles_service_1.RolesService]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map