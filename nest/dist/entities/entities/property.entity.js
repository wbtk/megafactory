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
exports.Property = exports.PropertyFormType = exports.PropertyDataTypes = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const PropertyGroup_entity_1 = require("./PropertyGroup.entity");
const users_entity_1 = require("../../users/entities/users.entity");
const sequelize_1 = require("sequelize");
const PropertyValue_entity_1 = require("./PropertyValue.entity");
const EntityType_entity_1 = require("./EntityType.entity");
var PropertyDataTypes;
(function (PropertyDataTypes) {
    PropertyDataTypes["integer"] = "\u0427\u0438\u0441\u043B\u043E";
    PropertyDataTypes["text"] = "\u0422\u0435\u043A\u0441\u0442";
    PropertyDataTypes["json"] = "Json";
    PropertyDataTypes["relation"] = "\u0421\u0432\u044F\u0437\u044C";
    PropertyDataTypes["options"] = "\u041E\u043F\u0446\u0438\u0438";
})(PropertyDataTypes = exports.PropertyDataTypes || (exports.PropertyDataTypes = {}));
var PropertyFormType;
(function (PropertyFormType) {
    PropertyFormType["string"] = "\u0421\u0442\u0440\u043E\u043A\u0430";
    PropertyFormType["text"] = "\u0422\u0435\u043A\u0441\u0442";
    PropertyFormType["integer"] = "\u0427\u0438\u0441\u043B\u043E";
    PropertyFormType["price"] = "\u0426\u0435\u043D\u0430";
    PropertyFormType["image"] = "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435";
    PropertyFormType["dropdown"] = "\u0412\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A";
    PropertyFormType["json"] = "Json";
    PropertyFormType["checkbox"] = "\u0427\u0435\u043A\u0431\u043E\u043A\u0441";
    PropertyFormType["radio"] = "\u0420\u0430\u0434\u0438\u043E";
})(PropertyFormType = exports.PropertyFormType || (exports.PropertyFormType = {}));
let Property = class Property extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Property.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ширина', description: 'Название свойства' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Property.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Заполняется вес товара', description: 'Описание свойства' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Property.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Сортировка' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 1 }),
    __metadata("design:type", Number)
], Property.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Тип свойства' }),
    (0, sequelize_typescript_1.Column)({
        type: (0, sequelize_1.ARRAY)((0, sequelize_1.ENUM)(...Object.keys(PropertyDataTypes))),
        allowNull: false
    }),
    __metadata("design:type", String)
], Property.prototype, "dataType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'string', description: 'Шаблон свойства' }),
    (0, sequelize_typescript_1.Column)({
        type: (0, sequelize_1.ARRAY)((0, sequelize_1.ENUM)(...Object.keys(PropertyFormType))),
        allowNull: false
    }),
    __metadata("design:type", String)
], Property.prototype, "formType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID группы свойств' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Property.prototype, "propertyGroupId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '{"apple": "Apple", "samsung": "Samsung"}', description: 'Опции для выбора значения' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSONB, allowNull: true }),
    __metadata("design:type", Object)
], Property.prototype, "options", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '{"status": { "name": "", type: "text" }}', description: 'JSON шаблон' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSONB, allowNull: true }),
    __metadata("design:type", Object)
], Property.prototype, "json", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'Активно' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: true }),
    __metadata("design:type", Boolean)
], Property.prototype, "active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'Обязательное' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false }),
    __metadata("design:type", Boolean)
], Property.prototype, "required", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'Видимое' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: true }),
    __metadata("design:type", Boolean)
], Property.prototype, "visible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'Участвует в поиске' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false }),
    __metadata("design:type", Boolean)
], Property.prototype, "searchable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'Сортируемое' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false }),
    __metadata("design:type", Boolean)
], Property.prototype, "sortable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'Множественное' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false }),
    __metadata("design:type", Boolean)
], Property.prototype, "multiple", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Связь с типом данных' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Property.prototype, "relationTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID создателя' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Property.prototype, "creatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID того кто удалил' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Property.prototype, "destroyerId", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    __metadata("design:type", Date)
], Property.prototype, "deletedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => PropertyGroup_entity_1.PropertyGroup, 'propertyGroupId'),
    __metadata("design:type", PropertyGroup_entity_1.PropertyGroup)
], Property.prototype, "group", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => PropertyValue_entity_1.PropertyValue, 'propertyId'),
    __metadata("design:type", Array)
], Property.prototype, "values", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => EntityType_entity_1.EntityType, 'relationTypeId'),
    __metadata("design:type", EntityType_entity_1.EntityType)
], Property.prototype, "relation", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_entity_1.User, 'creatorId'),
    __metadata("design:type", users_entity_1.User)
], Property.prototype, "creator", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_entity_1.User, 'destroyerId'),
    __metadata("design:type", users_entity_1.User)
], Property.prototype, "destroyer", void 0);
Property = __decorate([
    sequelize_typescript_1.Table
], Property);
exports.Property = Property;
//# sourceMappingURL=Property.entity.js.map