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
exports.CreateDocumentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateDocumentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '01.01.2000 00:00:01', description: 'Дата и время документа' }),
    (0, class_validator_1.IsDate)({ message: 'Должно быть датой' }),
    __metadata("design:type", Date)
], CreateDocumentDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'order', description: 'Тип документа' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateDocumentDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID организации' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    __metadata("design:type", Number)
], CreateDocumentDto.prototype, "organizationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'ID контрагента' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    __metadata("design:type", Number)
], CreateDocumentDto.prototype, "contractorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID родительского документа' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    __metadata("design:type", Number)
], CreateDocumentDto.prototype, "parentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'new', description: 'Статус документа' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateDocumentDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: { payDate: "01.01.2023" }, description: 'Дополнительные поля документа' }),
    __metadata("design:type", Object)
], CreateDocumentDto.prototype, "properties", void 0);
exports.CreateDocumentDto = CreateDocumentDto;
//# sourceMappingURL=create-document.dto.js.map