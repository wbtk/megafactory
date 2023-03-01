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
exports.SectionItem = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const section_entity_1 = require("./section.entity");
const item_entity_1 = require("./item.entity");
let SectionItem = class SectionItem extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => section_entity_1.CatalogSection),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], SectionItem.prototype, "sectionId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => item_entity_1.CatalogItem),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], SectionItem.prototype, "itemId", void 0);
SectionItem = __decorate([
    sequelize_typescript_1.Table
], SectionItem);
exports.SectionItem = SectionItem;
//# sourceMappingURL=section-item.entity.js.map