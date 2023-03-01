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
exports.EntityTypePropertyGroup = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const EntityType_entity_1 = require("./EntityType.entity");
const PropertyGroup_entity_1 = require("./PropertyGroup.entity");
let EntityTypePropertyGroup = class EntityTypePropertyGroup extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => EntityType_entity_1.EntityType),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], EntityTypePropertyGroup.prototype, "entityTypeId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => PropertyGroup_entity_1.PropertyGroup),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], EntityTypePropertyGroup.prototype, "propertyGroupId", void 0);
EntityTypePropertyGroup = __decorate([
    sequelize_typescript_1.Table
], EntityTypePropertyGroup);
exports.EntityTypePropertyGroup = EntityTypePropertyGroup;
//# sourceMappingURL=EntityType-PropertyGroup.entity.js.map