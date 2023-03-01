"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesModule = void 0;
const common_1 = require("@nestjs/common");
const files_service_1 = require("./files.service");
const files_controller_1 = require("./files.controller");
const sequelize_1 = require("@nestjs/sequelize");
const file_entity_1 = require("./entities/file.entity");
const users_module_1 = require("../users/users.module");
const auth_module_1 = require("../auth/auth.module");
let FilesModule = class FilesModule {
};
FilesModule = __decorate([
    (0, common_1.Module)({
        controllers: [files_controller_1.FilesController],
        providers: [files_service_1.FilesService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([file_entity_1.File]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule)
        ],
        exports: [files_service_1.FilesService]
    })
], FilesModule);
exports.FilesModule = FilesModule;
//# sourceMappingURL=files.module.js.map