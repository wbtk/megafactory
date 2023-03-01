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
exports.EntityItem = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const section_entity_1 = require("./section.entity");
const section_item_entity_1 = require("./section-item.entity");
const entitytype_entity_1 = require("./entitytype.entity");
let EntityItem = class EntityItem extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], EntityItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Продукт 1', description: 'Название элемента' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], EntityItem.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Сортировка' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 1 }),
    __metadata("design:type", Number)
], EntityItem.prototype, "sort", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => entitytype_entity_1.EntityType, 'entityTypeId'),
    __metadata("design:type", entitytype_entity_1.EntityType)
], EntityItem.prototype, "creator", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => section_entity_1.EntitySection, () => section_item_entity_1.SectionItem),
    __metadata("design:type", Array)
], EntityItem.prototype, "sections", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: {}, description: 'Значения дополнительных полей элемента' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSONB, allowNull: true }),
    __metadata("design:type", Object)
], EntityItem.prototype, "propertiesValue", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    __metadata("design:type", Date)
], EntityItem.prototype, "deletedAt", void 0);
EntityItem = __decorate([
    sequelize_typescript_1.Table
], EntityItem);
exports.EntityItem = EntityItem;
//# sourceMappingURL=item.entity.js.map