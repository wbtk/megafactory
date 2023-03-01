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
exports.EntityTypesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const EntityType_entity_1 = require("../entities/EntityType.entity");
const EntitySection_entity_1 = require("../entities/EntitySection.entity");
const EntityItem_entity_1 = require("../entities/EntityItem.entity");
let EntityTypesService = class EntityTypesService {
    constructor(entityTypeRepository, entitySectionRepository, entityItemRepository, sequelize) {
        this.entityTypeRepository = entityTypeRepository;
        this.entitySectionRepository = entitySectionRepository;
        this.entityItemRepository = entityItemRepository;
        this.sequelize = sequelize;
    }
    async create(createEntityDto, userId) {
        try {
            return await this.entityTypeRepository.create(Object.assign(Object.assign({}, createEntityDto), { creatorId: userId }));
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    async findAll() {
        return await this.entityTypeRepository.findAll();
    }
    async findById(id, paranoid = true) {
        const entityType = await this.entityTypeRepository.findByPk(id, { paranoid: paranoid });
        if (!entityType) {
            throw new common_1.HttpException('Справочник не найден', common_1.HttpStatus.NOT_FOUND);
        }
        return entityType;
    }
    async findEntityTypeElements(options) {
        return await this.entityItemRepository.findAll(options);
    }
    async update(id, updateEntityTypeDto) {
        try {
            const entityType = await this.findById(id);
            return await entityType.update(updateEntityTypeDto);
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
                const entityType = await this.findById(id);
                await entityType.update({ destroyerId: userId }, transactionHost);
                await entityType.destroy(transactionHost);
                return { code: 200, message: 'Справочник удален' };
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
                const entityType = await this.findById(id, false);
                if (!entityType.deletedAt) {
                    throw new common_1.HttpException('Справочник не удален', common_1.HttpStatus.BAD_REQUEST);
                }
                await entityType.update({ destroyerId: null }, transactionHost);
                await entityType.restore(transactionHost);
                return { code: 200, message: 'Справочник восстановлен' };
            });
            return result;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    async tree(id, paranoid = true) {
        return await this.entitySectionRepository.findAll({
            where: {
                entityTypeId: id,
                parentId: null
            },
            include: [
                {
                    model: EntitySection_entity_1.EntitySection,
                    as: 'childrens',
                    attributes: ['id', 'name', 'sort'],
                    separate: true,
                    order: [['sort', 'ASC']],
                    include: [
                        {
                            model: EntitySection_entity_1.EntitySection,
                            as: 'childrens',
                            attributes: ['id', 'name', 'sort'],
                            separate: true,
                            order: [['sort', 'ASC']],
                            include: [
                                {
                                    model: EntitySection_entity_1.EntitySection,
                                    as: 'childrens',
                                    attributes: ['id', 'name', 'sort'],
                                }
                            ]
                        }
                    ]
                }
            ],
            attributes: ['id', 'name', 'sort'],
            order: [
                ['sort', 'ASC']
            ],
            paranoid: paranoid
        });
    }
};
EntityTypesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(EntityType_entity_1.EntityType)),
    __param(1, (0, sequelize_1.InjectModel)(EntitySection_entity_1.EntitySection)),
    __param(2, (0, sequelize_1.InjectModel)(EntityItem_entity_1.EntityItem)),
    __metadata("design:paramtypes", [Object, Object, Object, sequelize_typescript_1.Sequelize])
], EntityTypesService);
exports.EntityTypesService = EntityTypesService;
//# sourceMappingURL=EntityTypes.service.js.map