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
exports.EntityTypesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const EntityTypes_service_1 = require("../services/EntityTypes.service");
const create_entity_type_dto_1 = require("../dto/create-entity-type.dto");
const update_entity_type_dto_1 = require("../dto/update-entity-type.dto");
const permissions_guard_1 = require("../../auth/permissions.guard");
const permissions_type_1 = require("../../users/permissions.type");
const EntityType_entity_1 = require("../entities/EntityType.entity");
const EntityItem_entity_1 = require("../entities/EntityItem.entity");
const EntitySection_entity_1 = require("../entities/EntitySection.entity");
const sequelize_1 = require("sequelize");
let EntityTypesController = class EntityTypesController {
    constructor(entityTypesService) {
        this.entityTypesService = entityTypesService;
    }
    create(createEntityDto, req) {
        return this.entityTypesService.create(createEntityDto, req.user.id);
    }
    findAll() {
        return this.entityTypesService.findAll();
    }
    findById(id) {
        return this.entityTypesService.findById(+id);
    }
    update(id, updateEntityDto) {
        return this.entityTypesService.update(+id, updateEntityDto);
    }
    remove(id, req) {
        return this.entityTypesService.remove(+id, req.user.id);
    }
    restore(id) {
        return this.entityTypesService.restore(+id);
    }
    findEntityTypeSections(id) {
        return this.entityTypesService.findById(+id);
    }
    findEntityTypeElements(id, name, limit = 20, page = 1, sortBy, sortDirection) {
        const where = {
            entityTypeId: id
        };
        if (name) {
            where['name'] = {
                [sequelize_1.Op.like]: `%${name}%`
            };
        }
        const offset = (page - 1) * limit;
        const order = sortBy ? [[sortBy, sortDirection]] : null;
        const options = { where, limit, offset, order };
        return this.entityTypesService.findEntityTypeElements(options);
    }
    tree(id) {
        return this.entityTypesService.tree(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание типа данных (Справочника)' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntityType_entity_1.EntityType }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.CreateEntityType)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entity_type_dto_1.CreateEntityTypeDto, Object]),
    __metadata("design:returntype", void 0)
], EntityTypesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех типов данных (Справочников)' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntityType_entity_1.EntityType }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ListEntityType)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EntityTypesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение типа данных (Справочника) по ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntityType_entity_1.EntityType }),
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ViewEntityType)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntityTypesController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление типа данных' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntityType_entity_1.EntityType }),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.UpdateEntityType)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_entity_type_dto_1.UpdateEntityTypeDto]),
    __metadata("design:returntype", void 0)
], EntityTypesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление типа данных (Справочника)' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.DeleteEntityType)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EntityTypesController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Восстановление типа данных (Справочника)' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Post)('/restore/:id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.RestoreEntityType)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntityTypesController.prototype, "restore", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение разделов типа данных (Справочника) по ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntitySection_entity_1.EntitySection }),
    (0, common_1.Get)(':id/sections'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ViewEntityType)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntityTypesController.prototype, "findEntityTypeSections", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение элементов типа данных (Справочника) по ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntityItem_entity_1.EntityItem }),
    (0, common_1.Get)(':id/elements'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ViewEntityItem)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('name')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('sortBy')),
    __param(5, (0, common_1.Query)('sortDirection')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number, String, String]),
    __metadata("design:returntype", void 0)
], EntityTypesController.prototype, "findEntityTypeElements", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение дерева разделов справочника' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntitySection_entity_1.EntitySection }),
    (0, common_1.Get)(':id/tree'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ListEntitySection)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EntityTypesController.prototype, "tree", null);
EntityTypesController = __decorate([
    (0, swagger_1.ApiTags)('Справочники'),
    (0, common_1.Controller)('entity-types'),
    __metadata("design:paramtypes", [EntityTypes_service_1.EntityTypesService])
], EntityTypesController);
exports.EntityTypesController = EntityTypesController;
//# sourceMappingURL=EntityTypes.controller.js.map