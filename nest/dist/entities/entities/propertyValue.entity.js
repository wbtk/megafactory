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
exports.PropertyValue = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const users_entity_1 = require("../../users/entities/users.entity");
const Property_entity_1 = require("./Property.entity");
const EntitySection_entity_1 = require("./EntitySection.entity");
const EntityItem_entity_1 = require("./EntityItem.entity");
const EntityType_entity_1 = require("./EntityType.entity");
let PropertyValue = class PropertyValue extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], PropertyValue.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Сортировка' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 1 }),
    __metadata("design:type", Number)
], PropertyValue.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Числовое значение' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], PropertyValue.prototype, "integer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Яблоко", description: 'Текстовое значение' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: true }),
    __metadata("design:type", String)
], PropertyValue.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: {}, description: 'Значение json' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSONB, allowNull: true }),
    __metadata("design:type", Object)
], PropertyValue.prototype, "json", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Значение из справочника' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", String)
], PropertyValue.prototype, "relation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "['apple', 'samsung']", description: 'Значения из вариантов' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: true }),
    __metadata("design:type", Array)
], PropertyValue.prototype, "options", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID свойства' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], PropertyValue.prototype, "propertyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID справочника' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], PropertyValue.prototype, "entityTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID раздела справочника' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], PropertyValue.prototype, "entitySectionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID элемента справочника' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], PropertyValue.prototype, "entityItemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID создателя' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], PropertyValue.prototype, "creatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID того кто удалил' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], PropertyValue.prototype, "destroyerId", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    __metadata("design:type", Date)
], PropertyValue.prototype, "deletedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Property_entity_1.Property, 'propertyId'),
    __metadata("design:type", Property_entity_1.Property)
], PropertyValue.prototype, "property", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => EntityType_entity_1.EntityType, 'entityTypeId'),
    __metadata("design:type", EntityType_entity_1.EntityType)
], PropertyValue.prototype, "entityType", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => EntitySection_entity_1.EntitySection, 'entitySectionId'),
    __metadata("design:type", EntitySection_entity_1.EntitySection)
], PropertyValue.prototype, "entitySection", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => EntityItem_entity_1.EntityItem, 'entityItemId'),
    __metadata("design:type", EntityItem_entity_1.EntityItem)
], PropertyValue.prototype, "entityItem", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_entity_1.User, 'creatorId'),
    __metadata("design:type", users_entity_1.User)
], PropertyValue.prototype, "creator", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_entity_1.User, 'destroyerId'),
    __metadata("design:type", users_entity_1.User)
], PropertyValue.prototype, "destroyer", void 0);
PropertyValue = __decorate([
    sequelize_typescript_1.Table
], PropertyValue);
exports.PropertyValue = PropertyValue;
//# sourceMappingURL=PropertyValue.entity.js.map