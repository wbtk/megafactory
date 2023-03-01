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
exports.Organization = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const users_entity_1 = require("../../users/entities/users.entity");
let Organization = class Organization extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Organization.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Активность' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: true }),
    __metadata("design:type", Boolean)
], Organization.prototype, "active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Отметка что организация является собвственной' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false }),
    __metadata("design:type", Boolean)
], Organization.prototype, "own", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ООО "Рага и капыта"', description: 'Название организации' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], Organization.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '78142311754302"', description: 'ИНН' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, unique: true, allowNull: true }),
    __metadata("design:type", String)
], Organization.prototype, "inn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID создателя' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Organization.prototype, "creatorId", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    __metadata("design:type", Date)
], Organization.prototype, "deletedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_entity_1.User, 'creatorId'),
    __metadata("design:type", users_entity_1.User)
], Organization.prototype, "creator", void 0);
Organization = __decorate([
    sequelize_typescript_1.Table
], Organization);
exports.Organization = Organization;
//# sourceMappingURL=organization.entity.js.map