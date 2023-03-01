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
exports.EntityItemsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const roles_entity_1 = require("../../users/entities/roles.entity");
const users_entity_1 = require("../../users/entities/users.entity");
const EntityItem_entity_1 = require("../entities/EntityItem.entity");
const EntitySection_entity_1 = require("../entities/EntitySection.entity");
const EntityType_entity_1 = require("../entities/EntityType.entity");
let EntityItemsService = class EntityItemsService {
    constructor(entityItemRepository, sequelize) {
        this.entityItemRepository = entityItemRepository;
        this.sequelize = sequelize;
    }
    async create(createEntityItemDto, userId) {
        try {
            const result = await this.sequelize.transaction(async (t) => {
                const transactionHost = { transaction: t };
                const entityItem = await this.entityItemRepository.create(Object.assign(Object.assign({}, createEntityItemDto), { creatorId: userId }), transactionHost);
                if (createEntityItemDto.entitySectionIds) {
                    createEntityItemDto.entitySectionIds.forEach(async (section) => {
                        await entityItem.$set('entitySections', [section]);
                    });
                }
                return entityItem;
            });
            return result;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    async findAll() {
        return await this.entityItemRepository.findAll({
            include: [
                {
                    model: EntityType_entity_1.EntityType,
                    attributes: ['id', 'name']
                },
                {
                    model: EntitySection_entity_1.EntitySection,
                    attributes: ['id', 'name']
                },
                {
                    model: users_entity_1.User, as: 'creator',
                    attributes: ['id', 'lastname', 'firstname', 'patronymic', 'email'],
                    include: [{
                            model: roles_entity_1.Role,
                            attributes: ['id', 'name']
                        }]
                }
            ]
        });
    }
    async findEntityTypeElements(options) {
        return await this.entityItemRepository.findAll(Object.assign(Object.assign({}, options), { include: [
                {
                    model: EntityType_entity_1.EntityType,
                    attributes: ['id', 'name']
                },
                {
                    model: EntitySection_entity_1.EntitySection,
                    attributes: ['id', 'name']
                },
                {
                    model: users_entity_1.User, as: 'creator',
                    attributes: ['id', 'lastname', 'firstname', 'patronymic', 'email'],
                    include: [{
                            model: roles_entity_1.Role,
                            attributes: ['id', 'name']
                        }]
                }
            ] }));
    }
    async findById(id, paranoid = true) {
        const entityItem = await this.entityItemRepository.findByPk(id, {
            paranoid: paranoid,
            include: [
                {
                    model: EntityType_entity_1.EntityType,
                    attributes: ['id', 'name']
                },
                {
                    model: EntitySection_entity_1.EntitySection,
                    attributes: ['id', 'name']
                },
                {
                    model: users_entity_1.User, as: 'creator',
                    attributes: ['id', 'lastname', 'firstname', 'patronymic', 'email'],
                    include: [{
                            model: roles_entity_1.Role,
                            attributes: ['id', 'name']
                        }]
                }
            ]
        });
        if (!entityItem) {
            throw new common_1.HttpException('Элемент справочника не найден', common_1.HttpStatus.NOT_FOUND);
        }
        return entityItem;
    }
    async update(id, updateEntityItemDto) {
        try {
            const entityItem = await this.findById(id);
            return await entityItem.update(updateEntityItemDto);
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    async remove(id, userId) {
        try {
            const result = await this.sequelize.transaction(async (t) => {
                const transactionHost = { transaction: t };
                const entityItem = await this.findById(id);
                await entityItem.update({ destroyerId: userId }, transactionHost);
                await entityItem.destroy(transactionHost);
                return { code: 200, message: 'Элемент справочника удален' };
            });
            return result;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    async restore(id) {
        try {
            const result = await this.sequelize.transaction(async (t) => {
                const transactionHost = { transaction: t };
                const entityItem = await this.findById(id, false);
                if (!entityItem.deletedAt) {
                    throw new common_1.HttpException('Элемент справочника не удален', common_1.HttpStatus.BAD_REQUEST);
                }
                await entityItem.update({ destroyerId: null }, transactionHost);
                await entityItem.restore(transactionHost);
                return { code: 200, message: 'Элемент справочника восстановлен' };
            });
            return result;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
};
EntityItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(EntityItem_entity_1.EntityItem)),
    __metadata("design:paramtypes", [Object, sequelize_typescript_1.Sequelize])
], EntityItemsService);
exports.EntityItemsService = EntityItemsService;
//# sourceMappingURL=EntityItems.service.js.map