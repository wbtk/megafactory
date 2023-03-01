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
exports.Document = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const users_entity_1 = require("../../users/entities/users.entity");
const options_1 = require("../options/options");
const organization_entity_1 = require("../../organizations/entities/organization.entity");
let Document = class Document extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Document.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'Проведён' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false }),
    __metadata("design:type", Boolean)
], Document.prototype, "committed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '01.01.2000 00:00:01', description: 'Дата и время документа' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, defaultValue: Date.now }),
    __metadata("design:type", Date)
], Document.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Номер документа' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Document.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'order', description: 'Тип документа' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ENUM, values: Object.keys(options_1.OPTIONS.types), allowNull: false }),
    __metadata("design:type", String)
], Document.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'ID организации' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Document.prototype, "organizationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'ID контрагента' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Document.prototype, "contractorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'ID родительского документа' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Document.prototype, "parentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'framed', description: 'Статус документа' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Document.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'ID создателя' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 1 }),
    __metadata("design:type", Number)
], Document.prototype, "creatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1000', description: 'Сумма документа' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], Document.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Сортировка документа' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Document.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: {}, description: 'Дополнительные поля документа' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSONB, allowNull: true }),
    __metadata("design:type", Object)
], Document.prototype, "properties", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    __metadata("design:type", Date)
], Document.prototype, "deletedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_entity_1.User, 'creatorId'),
    __metadata("design:type", users_entity_1.User)
], Document.prototype, "creator", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => organization_entity_1.Organization, 'organizationId'),
    __metadata("design:type", organization_entity_1.Organization)
], Document.prototype, "organization", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => organization_entity_1.Organization, 'contractorId'),
    __metadata("design:type", organization_entity_1.Organization)
], Document.prototype, "contractor", void 0);
Document = __decorate([
    sequelize_typescript_1.Table
], Document);
exports.Document = Document;
//# sourceMappingURL=document.entity.js.map