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
exports.EntitySectionPropertyGroup = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const EntitySection_entity_1 = require("./EntitySection.entity");
const PropertyGroup_entity_1 = require("./PropertyGroup.entity");
let EntitySectionPropertyGroup = class EntitySectionPropertyGroup extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => EntitySection_entity_1.EntitySection),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], EntitySectionPropertyGroup.prototype, "entitySectionId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => PropertyGroup_entity_1.PropertyGroup),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], EntitySectionPropertyGroup.prototype, "propertyGroupId", void 0);
EntitySectionPropertyGroup = __decorate([
    sequelize_typescript_1.Table
], EntitySectionPropertyGroup);
exports.EntitySectionPropertyGroup = EntitySectionPropertyGroup;
//# sourceMappingURL=EntitySection-PropertyGroup.entity.js.map