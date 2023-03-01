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
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const user_role_entity_1 = require("./user-role.entity");
const roles_entity_1 = require("./roles.entity");
const permissions_type_1 = require("../permissions.type");
const sequelize_1 = require("sequelize");
const file_entity_1 = require("../../files/entities/file.entity");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Уникальный идентификатор' }),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Unique,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@mail.ru', description: 'Email' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Иванов', description: 'Фамилия' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Иван', description: 'Имя' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Иванович', description: 'Отчество' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], User.prototype, "patronymic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456', description: 'Пароль' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'Активирован' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '["CreateOrder"]', description: 'Массив прав пользователя' }),
    (0, sequelize_typescript_1.Column)({
        type: (0, sequelize_1.ARRAY)((0, sequelize_1.ENUM)(...Object.keys(permissions_type_1.default))),
        defaultValue: []
    }),
    __metadata("design:type", Array)
], User.prototype, "permissions", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => roles_entity_1.Role, () => user_role_entity_1.UserRole),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    __metadata("design:type", Date)
], User.prototype, "deletedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => file_entity_1.File, "creatorId"),
    __metadata("design:type", Array)
], User.prototype, "files", void 0);
User = __decorate([
    (0, sequelize_typescript_1.DefaultScope)(() => ({})),
    sequelize_typescript_1.Table
], User);
exports.User = User;
//# sourceMappingURL=users.entity.js.map