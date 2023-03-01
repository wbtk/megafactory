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
exports.EntityType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const EntityType_PropertyGroup_entity_1 = require("./EntityType-PropertyGroup.entity");
const PropertyGroup_entity_1 = require("./PropertyGroup.entity");
const users_entity_1 = require("../../users/entities/users.entity");
let EntityType = class EntityType extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], EntityType.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Продукция', description: 'Название справочника' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], EntityType.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID родительского справочника' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], EntityType.prototype, "parentEntityTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Сортировка' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 1 }),
    __metadata("design:type", Number)
], EntityType.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID создателя' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], EntityType.prototype, "creatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID того кто удалил' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], EntityType.prototype, "destroyerId", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    __metadata("design:type", Date)
], EntityType.prototype, "deletedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => PropertyGroup_entity_1.PropertyGroup, () => EntityType_PropertyGroup_entity_1.EntityTypePropertyGroup),
    __metadata("design:type", Array)
], EntityType.prototype, "propertyGroups", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_entity_1.User, 'creatorId'),
    __metadata("design:type", users_entity_1.User)
], EntityType.prototype, "creator", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_entity_1.User, 'destroyerId'),
    __metadata("design:type", users_entity_1.User)
], EntityType.prototype, "destroyer", void 0);
EntityType = __decorate([
    sequelize_typescript_1.Table
], EntityType);
exports.EntityType = EntityType;
//# sourceMappingURL=EntityType.entity.js.map