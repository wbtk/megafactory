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
exports.EntitySectionsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const EntitySection_entity_1 = require("../entities/EntitySection.entity");
const EntityTypes_service_1 = require("./EntityTypes.service");
let EntitySectionsService = class EntitySectionsService {
    constructor(entitySectionRepository, entityTypesService, sequelize) {
        this.entitySectionRepository = entitySectionRepository;
        this.entityTypesService = entityTypesService;
        this.sequelize = sequelize;
    }
    async create(createEntitySectionDto, userId) {
        try {
            return await this.entitySectionRepository.create(Object.assign(Object.assign({}, createEntitySectionDto), { creatorId: userId }));
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    async findAll(paranoid = true) {
        return await this.entitySectionRepository.findAll({ paranoid: paranoid });
    }
    async findAllWithTrashed() {
        return await this.findAll(false);
    }
    async findById(id, paranoid = true) {
        const entitySection = await this.entitySectionRepository.findByPk(id, { paranoid: paranoid });
        if (!entitySection) {
            throw new common_1.HttpException('Раздел справочника не найден', common_1.HttpStatus.NOT_FOUND);
        }
        return entitySection;
    }
    async update(id, updateEntitySectionDto) {
        try {
            const entitySection = await this.findById(id);
            return await entitySection.update(updateEntitySectionDto);
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
                const entitySection = await this.findById(id);
                await entitySection.update({ destroyerId: userId }, transactionHost);
                await entitySection.destroy(transactionHost);
                return { status: 200, message: 'Раздел справочника удален' };
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
                const entitySection = await this.findById(id, false);
                if (!entitySection.deletedAt) {
                    throw new common_1.HttpException('Раздел справочника не удален', common_1.HttpStatus.BAD_REQUEST);
                }
                await entitySection.update({ destroyerId: null }, transactionHost);
                await entitySection.restore(transactionHost);
                return { status: 200, message: 'Раздел справочника восстановлен' };
            });
            return result;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    async tree(entityTypeId, paranoid = true) {
        return await this.entitySectionRepository.findAll({
            where: {
                entityTypeId: entityTypeId,
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
EntitySectionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(EntitySection_entity_1.EntitySection)),
    __metadata("design:paramtypes", [Object, EntityTypes_service_1.EntityTypesService,
        sequelize_typescript_1.Sequelize])
], EntitySectionsService);
exports.EntitySectionsService = EntitySectionsService;
//# sourceMappingURL=EntitySections.service.js.map