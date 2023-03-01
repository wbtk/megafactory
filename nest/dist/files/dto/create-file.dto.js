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
exports.CreateFileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateFileDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'icon', description: 'Название файла' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateFileDto.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'icon', description: 'Путь до файла' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateFileDto.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'icon', description: 'Размер файла' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateFileDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'icon', description: 'Mimetype до файла' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateFileDto.prototype, "mimetype", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'documents', description: 'Файл модуля' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateFileDto.prototype, "module", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'documents', description: 'Файл объекта' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateFileDto.prototype, "entity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID объекта' }),
    __metadata("design:type", Number)
], CreateFileDto.prototype, "entityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'preview', description: 'Поле объекта' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateFileDto.prototype, "field", void 0);
exports.CreateFileDto = CreateFileDto;
//# sourceMappingURL=create-file.dto.js.map