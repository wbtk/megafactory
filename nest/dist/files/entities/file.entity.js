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
exports.File = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const users_entity_1 = require("../../users/entities/users.entity");
let File = class File extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], File.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'icon', description: 'Название файла' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], File.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'img/icon.jpg', description: 'Путь до файла' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], File.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1024', description: 'Размер файла' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], File.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'image', description: 'Mimetype до файла' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], File.prototype, "mimetype", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'image', description: 'Модуль' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], File.prototype, "module", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'image', description: 'Модель' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], File.prototype, "entity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID модели' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], File.prototype, "entityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'avatar', description: 'Название поля' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], File.prototype, "field", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'ID создателя' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], File.prototype, "creatorId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_entity_1.User, 'creatorId'),
    __metadata("design:type", users_entity_1.User)
], File.prototype, "creator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Сортировка' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 1 }),
    __metadata("design:type", Number)
], File.prototype, "sort", void 0);
File = __decorate([
    sequelize_typescript_1.Table
], File);
exports.File = File;
//# sourceMappingURL=file.entity.js.map