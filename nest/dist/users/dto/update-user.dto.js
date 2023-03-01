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
exports.UpdateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Активирован' }),
    (0, class_validator_1.IsBoolean)({ message: 'Должно быть 0 или 1' }),
    __metadata("design:type", Boolean)
], UpdateUserDto.prototype, "active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Иванов', description: 'Фамилия' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Иван', description: 'Имя' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Иванович', description: 'Отчество' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "patronymic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@mail.ru', description: 'Email' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456', description: 'Пароль' }),
    (0, class_validator_1.Length)(4, 16, { message: 'Не меньше 4 и не больше 16' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "password", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map