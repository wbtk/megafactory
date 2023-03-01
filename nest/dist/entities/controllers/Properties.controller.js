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
exports.PropertiesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const Properties_service_1 = require("../services/Properties.service");
const create_property_dto_1 = require("../dto/create-property.dto");
const update_property_dto_1 = require("../dto/update-property.dto");
const permissions_guard_1 = require("../../auth/permissions.guard");
const permissions_type_1 = require("../../users/permissions.type");
const Property_entity_1 = require("../entities/Property.entity");
const fieldsDataTypeAndFormTypeToArray_pipe_1 = require("../pipes/transformation/property/fieldsDataTypeAndFormTypeToArray.pipe");
let PropertiesController = class PropertiesController {
    constructor(propertiesService) {
        this.propertiesService = propertiesService;
    }
    create(createPropertyDto, req) {
        return this.propertiesService.create(createPropertyDto, req.user.id);
    }
    findAll(groupId) {
        return this.propertiesService.findAllByGroup(+groupId);
    }
    findOne(id) {
        return this.propertiesService.findById(+id);
    }
    update(id, updatePropertyDto) {
        return this.propertiesService.update(+id, updatePropertyDto);
    }
    remove(id, req) {
        return this.propertiesService.remove(+id, req.user.id);
    }
    restore(id) {
        return this.propertiesService.restore(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание свойства' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Property_entity_1.Property }),
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new fieldsDataTypeAndFormTypeToArray_pipe_1.FieldsDataTypeAndFormTypeToArray()),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.CreateProperty)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_property_dto_1.CreatePropertyDto, Object]),
    __metadata("design:returntype", void 0)
], PropertiesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение свойств по группе' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Property_entity_1.Property }),
    (0, common_1.Get)('/group/:groupId'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ListProperty)),
    __param(0, (0, common_1.Param)('groupId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertiesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение свойства по ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Property_entity_1.Property }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertiesController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление свойства' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Property_entity_1.Property }),
    (0, common_1.UsePipes)(new fieldsDataTypeAndFormTypeToArray_pipe_1.FieldsDataTypeAndFormTypeToArray()),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_property_dto_1.UpdatePropertyDto]),
    __metadata("design:returntype", void 0)
], PropertiesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление свойства' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.DeleteProperty)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PropertiesController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Восстановление свойства' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Post)('/restore/:id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.RestoreProperty)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertiesController.prototype, "restore", null);
PropertiesController = __decorate([
    (0, swagger_1.ApiTags)('Свойства справочников'),
    (0, common_1.Controller)('properties'),
    __metadata("design:paramtypes", [Properties_service_1.PropertiesService])
], PropertiesController);
exports.PropertiesController = PropertiesController;
//# sourceMappingURL=Properties.controller.js.map