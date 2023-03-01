"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const swagger_1 = require("@nestjs/swagger");
const users_entity_1 = require("./users.entity");
const user_role_entity_1 = require("./user-role.entity");
const permissions_type_1 = require("../permissions.type");
let Role = class Role extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Администратор', description: 'Название роли' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: false, allowNull: false }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'admin', description: 'Символьный код' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Role.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Роль администратора системы', description: 'Описание роли' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: (0, sequelize_1.ARRAY)((0, sequelize_1.ENUM)(...Object.keys(permissions_type_1.default))),
        defaultValue: []
    }),
    __metadata("design:type", Array)
], Role.prototype, "permissions", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => users_entity_1.User, () => user_role_entity_1.UserRole),
    __metadata("design:type", Array)
], Role.prototype, "users", void 0);
Role = __decorate([
    sequelize_typescript_1.Table
], Role);
exports.Role = Role;
//# sourceMappingURL=roles.entity.js.map