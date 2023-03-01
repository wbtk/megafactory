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
exports.PropertyGroupsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const PropertyGroups_service_1 = require("../services/PropertyGroups.service");
const create_property_group_dto_1 = require("../dto/create-property-group.dto");
const update_property_group_dto_1 = require("../dto/update-property-group.dto");
const permissions_guard_1 = require("../../auth/permissions.guard");
const permissions_type_1 = require("../../users/permissions.type");
const PropertyGroup_entity_1 = require("../entities/PropertyGroup.entity");
let PropertyGroupsController = class PropertyGroupsController {
    constructor(propertyGroupsService) {
        this.propertyGroupsService = propertyGroupsService;
    }
    create(createPropertyGroupDto, req) {
        return this.propertyGroupsService.create(createPropertyGroupDto, req.user.id);
    }
    findAll() {
        return this.propertyGroupsService.findAll();
    }
    findAllByEntityType(entityTypeId) {
        return this.propertyGroupsService.findAllByEntityType(+entityTypeId);
    }
    findAllByEntitySection(entitySectionId) {
        return this.propertyGroupsService.findAllByEntitySection(+entitySectionId);
    }
    findAllByEntityItem(entityItemId) {
        return this.propertyGroupsService.findAllByEntityItem(+entityItemId);
    }
    findOne(id) {
        return this.propertyGroupsService.findById(+id);
    }
    update(id, updatePropertyGroupDto) {
        return this.propertyGroupsService.update(+id, updatePropertyGroupDto);
    }
    remove(id, req) {
        return this.propertyGroupsService.remove(+id, req.user.id);
    }
    restore(id) {
        return this.propertyGroupsService.restore(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание группы свойств' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: PropertyGroup_entity_1.PropertyGroup }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.CreatePropertyGroup)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_property_group_dto_1.CreatePropertyGroupDto, Object]),
    __metadata("design:returntype", void 0)
], PropertyGroupsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех групп свойств' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: PropertyGroup_entity_1.PropertyGroup }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ListPropertyGroup)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PropertyGroupsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение групп свойств справочника' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: PropertyGroup_entity_1.PropertyGroup }),
    (0, common_1.Get)('entity-type/:entityTypeId'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ListPropertyGroup)),
    __param(0, (0, common_1.Param)('entityTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertyGroupsController.prototype, "findAllByEntityType", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение групп свойств раздела справочника' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: PropertyGroup_entity_1.PropertyGroup }),
    (0, common_1.Get)('entity-section/:entitySectionId'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ListPropertyGroup)),
    __param(0, (0, common_1.Param)('entitySectionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertyGroupsController.prototype, "findAllByEntitySection", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение групп свойств элемента справочника' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: PropertyGroup_entity_1.PropertyGroup }),
    (0, common_1.Get)('entity-item/:entityItemId'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ListPropertyGroup)),
    __param(0, (0, common_1.Param)('entityItemId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PropertyGroupsController.prototype, "findAllByEntityItem", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение группы свойств по ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: PropertyGroup_entity_1.PropertyGroup }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertyGroupsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление данных группы свойств' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: PropertyGroup_entity_1.PropertyGroup }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_property_group_dto_1.UpdatePropertyGroupDto]),
    __metadata("design:returntype", void 0)
], PropertyGroupsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление группы свойств' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.DeletePropertyGroup)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PropertyGroupsController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Восстановление группы свойств' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Post)('/restore/:id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.RestorePropertyGroup)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertyGroupsController.prototype, "restore", null);
PropertyGroupsController = __decorate([
    (0, swagger_1.ApiTags)('Группы свойств справочников'),
    (0, common_1.Controller)('property-groups'),
    __metadata("design:paramtypes", [PropertyGroups_service_1.PropertyGroupsService])
], PropertyGroupsController);
exports.PropertyGroupsController = PropertyGroupsController;
//# sourceMappingURL=PropertyGroups.controller.js.map