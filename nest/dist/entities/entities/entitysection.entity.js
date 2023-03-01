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
var EntitySection_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitySection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const EntitySection_EntityItem_entity_1 = require("./EntitySection-EntityItem.entity");
const EntityItem_entity_1 = require("./EntityItem.entity");
const EntityType_entity_1 = require("./EntityType.entity");
const users_entity_1 = require("../../users/entities/users.entity");
const PropertyGroup_entity_1 = require("./PropertyGroup.entity");
const EntitySection_PropertyGroup_entity_1 = require("./EntitySection-PropertyGroup.entity");
let EntitySection = EntitySection_1 = class EntitySection extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], EntitySection.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Продукция', description: 'Название раздела' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], EntitySection.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Сортировка' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 1 }),
    __metadata("design:type", Number)
], EntitySection.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Идентификатор сравочника' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], EntitySection.prototype, "entityTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Идентификатор родительского раздела' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], EntitySection.prototype, "parentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID создателя' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], EntitySection.prototype, "creatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID того кто удалил' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], EntitySection.prototype, "destroyerId", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    __metadata("design:type", Date)
], EntitySection.prototype, "deletedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => EntityType_entity_1.EntityType, 'entityTypeId'),
    __metadata("design:type", EntityType_entity_1.EntityType)
], EntitySection.prototype, "entityType", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => EntitySection_1, 'parentId'),
    __metadata("design:type", EntitySection)
], EntitySection.prototype, "parent", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => EntitySection_1, 'parentId'),
    __metadata("design:type", Array)
], EntitySection.prototype, "childrens", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => EntityItem_entity_1.EntityItem, () => EntitySection_EntityItem_entity_1.EntitySectionEntityItem),
    __metadata("design:type", Array)
], EntitySection.prototype, "items", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => PropertyGroup_entity_1.PropertyGroup, () => EntitySection_PropertyGroup_entity_1.EntitySectionPropertyGroup),
    __metadata("design:type", Array)
], EntitySection.prototype, "propertyGroups", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_entity_1.User, 'creatorId'),
    __metadata("design:type", users_entity_1.User)
], EntitySection.prototype, "creator", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_entity_1.User, 'destroyerId'),
    __metadata("design:type", users_entity_1.User)
], EntitySection.prototype, "destroyer", void 0);
EntitySection = EntitySection_1 = __decorate([
    sequelize_typescript_1.Table,
    (0, sequelize_typescript_1.Scopes)(() => ({
        sortered: {
            order: [['sort', 'ASC']]
        }
    }))
], EntitySection);
exports.EntitySection = EntitySection;
//# sourceMappingURL=EntitySection.entity.js.map