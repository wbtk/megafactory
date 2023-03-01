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
exports.EntityItemsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sequelize_1 = require("sequelize");
const permissions_guard_1 = require("../../auth/permissions.guard");
const permissions_type_1 = require("../../users/permissions.type");
const create_entity_item_dto_1 = require("../dto/create-entity-item.dto");
const update_entity_item_dto_1 = require("../dto/update-entity-item.dto");
const EntityItem_entity_1 = require("../entities/EntityItem.entity");
const EntityItems_service_1 = require("../services/EntityItems.service");
let EntityItemsController = class EntityItemsController {
    constructor(entityItemsService) {
        this.entityItemsService = entityItemsService;
    }
    create(createEntityItemDto, req) {
        return this.entityItemsService.create(createEntityItemDto, req.user.id);
    }
    findAll() {
        return this.entityItemsService.findAll();
    }
    findAllByEntityType(entityTypeId, name, limit = 20, page = 1, sortBy, sortDirection) {
        const where = {
            entityTypeId: +entityTypeId
        };
        if (name) {
            where['name'] = {
                [sequelize_1.Op.like]: `%${name}%`
            };
        }
        const offset = (page - 1) * limit;
        const order = sortBy ? [[sortBy, sortDirection]] : null;
        const options = { where, limit, offset, order };
        return this.entityItemsService.findEntityTypeElements(options);
    }
    findById(id) {
        return this.entityItemsService.findById(id);
    }
    update(id, updateEntityDto) {
        return this.entityItemsService.update(+id, updateEntityDto);
    }
    remove(id, req) {
        return this.entityItemsService.remove(+id, req.user.id);
    }
    restore(id) {
        return this.entityItemsService.restore(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание раздела типа данных (Справочника)' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntityItem_entity_1.EntityItem }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.CreateEntityItem)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entity_item_dto_1.CreateEntityItemDto, Object]),
    __metadata("design:returntype", void 0)
], EntityItemsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех элементов справочников' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntityItem_entity_1.EntityItem }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ListEntityItem)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EntityItemsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех элементов справочника' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntityItem_entity_1.EntityItem }),
    (0, common_1.Get)('entity-type/:entityTypeId'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ListEntityItem)),
    __param(0, (0, common_1.Param)('entityTypeId')),
    __param(1, (0, common_1.Query)('name')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('sortBy')),
    __param(5, (0, common_1.Query)('sortDirection')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number, String, String]),
    __metadata("design:returntype", void 0)
], EntityItemsController.prototype, "findAllByEntityType", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение элемента справочника по ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntityItem_entity_1.EntityItem }),
    (0, common_1.Get)('/:id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.ViewEntityItem)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EntityItemsController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление раздела типа данных' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: EntityItem_entity_1.EntityItem }),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.UpdateEntityItem)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_entity_item_dto_1.UpdateEntityItemDto]),
    __metadata("design:returntype", void 0)
], EntityItemsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление раздела типа данных (Справочника)' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.DeleteEntityItem)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EntityItemsController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Восстановление раздела типа данных (Справочника)' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Post)('/restore/:id'),
    (0, common_1.UseGuards)((0, permissions_guard_1.default)(permissions_type_1.default.RestoreEntityItem)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntityItemsController.prototype, "restore", null);
EntityItemsController = __decorate([
    (0, swagger_1.ApiTags)('Элементы справочника'),
    (0, common_1.Controller)('entity-items'),
    __metadata("design:paramtypes", [EntityItems_service_1.EntityItemsService])
], EntityItemsController);
exports.EntityItemsController = EntityItemsController;
//# sourceMappingURL=EntityItems.controller.js.map