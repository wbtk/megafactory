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
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const permissions_type_1 = require("../permissions.type");
class CreateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Иванов', description: 'Фамилия' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Иван', description: 'Имя' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Иванович', description: 'Отчество' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "patronymic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@mail.ru', description: 'Email' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456', description: 'Пароль' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(Object.keys(permissions_type_1.default), { each: true }),
    (0, swagger_1.ApiProperty)({
        example: 'Права роли',
        description: 'Список прав у роли',
        isArray: true,
        required: false,
        enum: permissions_type_1.default
    }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "permissions", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map