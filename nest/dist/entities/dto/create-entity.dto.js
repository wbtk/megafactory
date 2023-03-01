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
exports.CreateEntityDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEntityDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Города', description: 'Название справочника' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateEntityDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID родительского справочника' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    __metadata("design:type", Number)
], CreateEntityDto.prototype, "parentEntityTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Сортировка' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    __metadata("design:type", Number)
], CreateEntityDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: { color: "red" }, description: 'Дополнительные поля справочника' }),
    __metadata("design:type", Object)
], CreateEntityDto.prototype, "properties", void 0);
exports.CreateEntityDto = CreateEntityDto;
//# sourceMappingURL=create-entity.dto.js.map