"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationsModule = void 0;
const common_1 = require("@nestjs/common");
const organizations_service_1 = require("./organizations.service");
const organizations_controller_1 = require("./organizations.controller");
const organization_entity_1 = require("./entities/organization.entity");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("../users/users.module");
const auth_module_1 = require("../auth/auth.module");
let OrganizationsModule = class OrganizationsModule {
};
OrganizationsModule = __decorate([
    (0, common_1.Module)({
        controllers: [organizations_controller_1.OrganizationsController],
        providers: [organizations_service_1.OrganizationsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([organization_entity_1.Organization]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule)
        ],
    })
], OrganizationsModule);
exports.OrganizationsModule = OrganizationsModule;
//# sourceMappingURL=organizations.module.js.map