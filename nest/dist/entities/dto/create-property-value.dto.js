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
exports.CreatePropertyValueDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePropertyValueDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100, description: 'Числовое значение свойства' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    __metadata("design:type", Number)
], CreatePropertyValueDto.prototype, "integer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '100 см', description: 'Текстовое значение свойства' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreatePropertyValueDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: { city: 'Санкт-Петербург' }, description: 'JSON значение свойства' }),
    (0, class_validator_1.IsJSON)({ message: 'Должно быть json' }),
    __metadata("design:type", Object)
], CreatePropertyValueDto.prototype, "json", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100, description: 'Связующее значение свойства (ID справочника)' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    __metadata("design:type", Number)
], CreatePropertyValueDto.prototype, "relation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "['apple', 'samsung']", description: 'Опционное значение свойства' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", Array)
], CreatePropertyValueDto.prototype, "options", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID свойства' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    __metadata("design:type", Number)
], CreatePropertyValueDto.prototype, "propertyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID справочника' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    __metadata("design:type", Number)
], CreatePropertyValueDto.prototype, "entityTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID раздела справочника' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    __metadata("design:type", Number)
], CreatePropertyValueDto.prototype, "entitySectionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID элемента справочника' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    __metadata("design:type", Number)
], CreatePropertyValueDto.prototype, "entityItemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Сортировка' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    __metadata("design:type", Number)
], CreatePropertyValueDto.prototype, "sort", void 0);
exports.CreatePropertyValueDto = CreatePropertyValueDto;
//# sourceMappingURL=create-property-value.dto.js.map