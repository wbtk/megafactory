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
exports.EntitySectionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const permissions_guard_1 = require("../../auth/permissions.guard");
const permissions_type_1 = require("../../users/permissions.type");
const create_entity_section_dto_1 = require("../dto/create-entity-section.dto");
const update_entity_section_dto_1 = require("../dto/update-entity-section.dto");
const EntitySection_entity_1 = require("../entities/EntitySection.entity");
const EntitySections_service_1 = require("../services/EntitySections.service");
let EntitySectionsController = class EntitySectionsController {
    constructor(entitySectionsService) {
        this.entitySectionsService = entitySectionsService;
    }
    create(createEntitySectionDto, req) {
        return this.entitySectionsService.create(createEntitySectionDto, req.user.id);
    }
    findAll() {
        return this.entitySectionsService.findAll();
    }
    tree(entityTypeId) {
        return this.entitySectionsService.tree(entityTypeId);
    }
    findById(entityTypeId) {
        return this.entitySectionsService.findById(entityTypeId);
    }
    update(id, updateEntityDto) {
        return this.entitySectionsService.update(+id, updateEntityDto);
    }
    remove(id, req) {
        return this.entitySectionsService.remove(+id, req.user.id);
    }
    restore(id) {
        return this.entitySectionsService.restore(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание раздела типа данных (Справочника)' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntitySection_entity_1.EntitySection }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.CreateEntitySection)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entity_section_dto_1.CreateEntitySectionDto, Object]),
    __metadata("design:returntype", void 0)
], EntitySectionsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех разделов справочников' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntitySection_entity_1.EntitySection }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ListEntitySection)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EntitySectionsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение дерева разделов справочника' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntitySection_entity_1.EntitySection }),
    (0, common_1.Get)('/tree/:entityTypeId'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ListEntitySection)),
    __param(0, (0, common_1.Param)('entityTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EntitySectionsController.prototype, "tree", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех разделов справочников' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntitySection_entity_1.EntitySection }),
    (0, common_1.Get)('/:id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ListEntitySection)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EntitySectionsController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление раздела типа данных' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntitySection_entity_1.EntitySection }),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.UpdateEntitySection)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_entity_section_dto_1.UpdateEntitySectionDto]),
    __metadata("design:returntype", void 0)
], EntitySectionsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление раздела типа данных (Справочника)' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.DeleteEntitySection)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EntitySectionsController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Восстановление раздела типа данных (Справочника)' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Post)('/restore/:id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.RestoreEntitySection)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntitySectionsController.prototype, "restore", null);
EntitySectionsController = __decorate([
    (0, swagger_1.ApiTags)('Разделы справочника'),
    (0, common_1.Controller)('entity-sections'),
    __metadata("design:paramtypes", [EntitySections_service_1.EntitySectionsService])
], EntitySectionsController);
exports.EntitySectionsController = EntitySectionsController;
//# sourceMappingURL=EntitySections.controller.js.map