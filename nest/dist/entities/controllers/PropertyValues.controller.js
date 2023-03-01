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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyValuesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const PropertyValues_service_1 = require("../services/PropertyValues.service");
const create_property_value_dto_1 = require("../dto/create-property-value.dto");
const update_property_value_dto_1 = require("../dto/update-property-value.dto");
const permissions_guard_1 = require("../../auth/permissions.guard");
const permissions_type_1 = require("../../users/permissions.type");
const PropertyValue_entity_1 = require("../entities/PropertyValue.entity");
let PropertyValuesController = class PropertyValuesController {
    constructor(propertyValuesService) {
        this.propertyValuesService = propertyValuesService;
    }
    create(createPropertyValueDto, req) {
        return this.propertyValuesService.create(createPropertyValueDto, req.user.id);
    }
    findAll() {
        return this.propertyValuesService.findAll();
    }
    findOne(id) {
        return this.propertyValuesService.findById(+id);
    }
    findValuesByPropertyId(id) {
        return this.propertyValuesService.findByProperty(+id);
    }
    update(id, updatePropertyValueDto, req) {
        return this.propertyValuesService.update(+id, updatePropertyValueDto, req.user.id);
    }
    remove(id, req) {
        return this.propertyValuesService.remove(+id, req.user.id);
    }
    restore(id) {
        return this.propertyValuesService.restore(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание значения свойства' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: PropertyValue_entity_1.PropertyValue }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.CreatePropertyValue)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_property_value_dto_1.CreatePropertyValueDto, Object]),
    __metadata("design:returntype", void 0)
], PropertyValuesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех значений свойств' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: PropertyValue_entity_1.PropertyValue }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ListPropertyValue)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PropertyValuesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение значений по ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: PropertyValue_entity_1.PropertyValue }),
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ViewPropertyValue)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertyValuesController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение значений по ID свойства' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: PropertyValue_entity_1.PropertyValue }),
    (0, common_1.Get)('/property/:id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ViewPropertyValue)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertyValuesController.prototype, "findValuesByPropertyId", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление значений свойств' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: PropertyValue_entity_1.PropertyValue }),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.UpdatePropertyValue)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_property_value_dto_1.UpdatePropertyValueDto, Object]),
    __metadata("design:returntype", void 0)
], PropertyValuesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление значений свойств' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.DeletePropertyValue)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PropertyValuesController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Восстановление значений свойств' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Post)('/restore/:id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.RestorePropertyValue)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertyValuesController.prototype, "restore", null);
PropertyValuesController = __decorate([
    (0, swagger_1.ApiTags)('Группы свойств справочников'),
    (0, common_1.Controller)('property-values'),
    __metadata("design:paramtypes", [PropertyValues_service_1.PropertyValuesService])
], PropertyValuesController);
exports.PropertyValuesController = PropertyValuesController;
//# sourceMappingURL=PropertyValues.controller.js.map