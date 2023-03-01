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
exports.CreatePropertyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const Property_entity_1 = require("../entities/Property.entity");
const Property_entity_2 = require("../entities/Property.entity");
class CreatePropertyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ширина', description: 'Название свойства' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreatePropertyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Указывается ширина в мм', description: 'Описание свойства' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreatePropertyDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Сортировка' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    __metadata("design:type", Number)
], CreatePropertyDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Тип свойства' }),
    (0, class_validator_1.IsEnum)(Object.keys(Property_entity_1.PropertyDataTypes), { each: true }),
    __metadata("design:type", String)
], CreatePropertyDto.prototype, "dataType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'string', description: 'Название шаблона вывода' }),
    (0, class_validator_1.IsEnum)(Object.keys(Property_entity_2.PropertyFormType), { each: true }),
    __metadata("design:type", String)
], CreatePropertyDto.prototype, "formType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Связь с типом данных (ID справочника)' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    __metadata("design:type", Number)
], CreatePropertyDto.prototype, "relationTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '{"apple": "Apple", "samsung": "Samsung"}', description: 'Опции' }),
    __metadata("design:type", Object)
], CreatePropertyDto.prototype, "options", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '{"status": { "name": "", type: "text" }}', description: 'JSON шаблон' }),
    __metadata("design:type", Object)
], CreatePropertyDto.prototype, "json", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID разделов' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    __metadata("design:type", Number)
], CreatePropertyDto.prototype, "propertyGroupId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Активно' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)({ message: 'Должно быть boolean' }),
    __metadata("design:type", Boolean)
], CreatePropertyDto.prototype, "active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Обязательное' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)({ message: 'Должно быть boolean' }),
    __metadata("design:type", Boolean)
], CreatePropertyDto.prototype, "required", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Видимое' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)({ message: 'Должно быть boolean' }),
    __metadata("design:type", Boolean)
], CreatePropertyDto.prototype, "visible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Участвует в поиске' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)({ message: 'Должно быть boolean' }),
    __metadata("design:type", Boolean)
], CreatePropertyDto.prototype, "searchable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Сортируемое' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)({ message: 'Должно быть boolean' }),
    __metadata("design:type", Boolean)
], CreatePropertyDto.prototype, "sortable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Множественное' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)({ message: 'Должно быть boolean' }),
    __metadata("design:type", Boolean)
], CreatePropertyDto.prototype, "multiple", void 0);
exports.CreatePropertyDto = CreatePropertyDto;
//# sourceMappingURL=create-property.dto.js.map