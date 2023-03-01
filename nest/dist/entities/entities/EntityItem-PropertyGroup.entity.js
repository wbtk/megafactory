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
exports.EntityItemPropertyGroup = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const EntityItem_entity_1 = require("./EntityItem.entity");
const PropertyGroup_entity_1 = require("./PropertyGroup.entity");
let EntityItemPropertyGroup = class EntityItemPropertyGroup extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => EntityItem_entity_1.EntityItem),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], EntityItemPropertyGroup.prototype, "entityItemId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => PropertyGroup_entity_1.PropertyGroup),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], EntityItemPropertyGroup.prototype, "propertyGroupId", void 0);
EntityItemPropertyGroup = __decorate([
    sequelize_typescript_1.Table
], EntityItemPropertyGroup);
exports.EntityItemPropertyGroup = EntityItemPropertyGroup;
//# sourceMappingURL=EntityItem-PropertyGroup.entity.js.map