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
exports.OrganizationsController = void 0;
const common_1 = require("@nestjs/common");
const organizations_service_1 = require("./organizations.service");
const create_organization_dto_1 = require("./dto/create-organization.dto");
const update_organization_dto_1 = require("./dto/update-organization.dto");
const swagger_1 = require("@nestjs/swagger");
const permissions_guard_1 = require("../auth/permissions.guard");
const permissions_type_1 = require("../users/permissions.type");
const organization_entity_1 = require("./entities/organization.entity");
let OrganizationsController = class OrganizationsController {
    constructor(organizationsService) {
        this.organizationsService = organizationsService;
    }
    create(createOrganizationDto, req) {
        return this.organizationsService.create(createOrganizationDto, req.user.id);
    }
    findAll() {
        return this.organizationsService.findAll();
    }
    findOne(id) {
        return this.organizationsService.findOne(+id);
    }
    update(id, updateOrganizationDto) {
        return this.organizationsService.update(+id, updateOrganizationDto);
    }
    remove(id) {
        return this.organizationsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Создание организации' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: organization_entity_1.Organization }),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.CreateOrganization)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_organization_dto_1.CreateOrganizationDto, Object]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех организаций' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [organization_entity_1.Organization] }),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ListOrganization)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение организации по ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [organization_entity_1.Organization] }),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ViewOrganization)),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Редактирование организации' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [organization_entity_1.Organization] }),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.UpdateOrganization)),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_organization_dto_1.UpdateOrganizationDto]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление организации' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [organization_entity_1.Organization] }),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.DeleteOrganization)),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "remove", null);
OrganizationsController = __decorate([
    (0, swagger_1.ApiTags)('Организации'),
    (0, common_1.Controller)('organizations'),
    __metadata("design:paramtypes", [organizations_service_1.OrganizationsService])
], OrganizationsController);
exports.OrganizationsController = OrganizationsController;
//# sourceMappingURL=organizations.controller.js.map