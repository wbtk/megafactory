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
exports.PropertyGroupsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const EntityItem_entity_1 = require("../entities/EntityItem.entity");
const EntitySection_entity_1 = require("../entities/EntitySection.entity");
const EntityType_entity_1 = require("../entities/EntityType.entity");
const Property_entity_1 = require("../entities/Property.entity");
const PropertyGroup_entity_1 = require("../entities/PropertyGroup.entity");
let PropertyGroupsService = class PropertyGroupsService {
    constructor(propertyGroupRepository, entityTypeRepository, entitySectionRepository, entityItemRepository, sequelize) {
        this.propertyGroupRepository = propertyGroupRepository;
        this.entityTypeRepository = entityTypeRepository;
        this.entitySectionRepository = entitySectionRepository;
        this.entityItemRepository = entityItemRepository;
        this.sequelize = sequelize;
    }
    async create(createPropertyGroupDto, userId) {
        try {
            const propertyGroup = await this.propertyGroupRepository.create(Object.assign(Object.assign({}, createPropertyGroupDto), { creatorId: userId }));
            if (createPropertyGroupDto.entityTypes) {
                createPropertyGroupDto.entityTypes.forEach(entityType => {
                    this.addPropertyGroupToEntityType({
                        propertyGroupId: propertyGroup.id,
                        entityTypeId: entityType['id']
                    });
                });
            }
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    findAll(paranoid = true) {
        return this.propertyGroupRepository.findAll({ paranoid: paranoid });
    }
    async findAllByEntityType(entityTypeId, paranoid = true) {
        const entityType = await this.entityTypeRepository.findByPk(entityTypeId, {
            include: [
                {
                    model: PropertyGroup_entity_1.PropertyGroup,
                    attributes: ['id', 'name'],
                    paranoid
                }
            ],
        });
        return entityType.propertyGroups;
    }
    async findAllByEntitySection(entitySectionId, paranoid = true) {
        const entitySection = await this.entitySectionRepository.findByPk(entitySectionId, {
            include: [
                {
                    model: PropertyGroup_entity_1.PropertyGroup,
                    attributes: ['id', 'name'],
                    paranoid
                }
            ],
        });
        return entitySection.propertyGroups;
    }
    async findAllByEntityItem(entityItemId, paranoid = true) {
        const entityItem = await this.entityItemRepository.findByPk(entityItemId, {
            include: [
                {
                    model: PropertyGroup_entity_1.PropertyGroup,
                    attributes: ['id', 'name'],
                    paranoid
                }
            ],
        });
        return entityItem.propertyGroups;
    }
    findAllWithTrashed() {
        return this.findAll(false);
    }
    async findById(id, paranoid = true) {
        const propertyGroup = await this.propertyGroupRepository.findByPk(id, { paranoid: paranoid });
        if (!propertyGroup) {
            throw new common_1.HttpException('Группа свойств не найдена', common_1.HttpStatus.NOT_FOUND);
        }
        return propertyGroup;
    }
    async update(id, updatePropertyGroupDto) {
        try {
            const propertyGroup = await this.findById(id);
            return await propertyGroup.update(updatePropertyGroupDto);
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
                const propertyGroup = await this.propertyGroupRepository.findByPk(id, {
                    include: [
                        {
                            model: Property_entity_1.Property,
                            attributes: ['id']
                        }
                    ],
                });
                if (propertyGroup.properties.length) {
                    throw new common_1.HttpException('Группа имеет свойства', common_1.HttpStatus.BAD_REQUEST);
                }
                await propertyGroup.update({ destroyerId: userId }, transactionHost);
                await propertyGroup.destroy(transactionHost);
                return { code: 200, message: 'Группа свойств удалена' };
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
                const propertyGroup = await this.findById(id, false);
                if (!propertyGroup.deletedAt) {
                    throw new common_1.HttpException('Группа свойств не удалена', common_1.HttpStatus.BAD_REQUEST);
                }
                await propertyGroup.update({ destroyerId: null }, transactionHost);
                await propertyGroup.restore(transactionHost);
                return { code: 200, message: 'Группа свойств восстановлена' };
            });
            return result;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    async addPropertyGroupToEntityType(dto) {
        const entityType = await this.entityTypeRepository.findByPk(dto.entityTypeId, { attributes: ['id'] });
        const propertyGroup = await this.propertyGroupRepository.findByPk(dto.propertyGroupId, { attributes: ['id'] });
        if (entityType && propertyGroup) {
            await entityType.$add('propertyGroups', propertyGroup.id);
            return { code: 200, message: 'Группа полей добавлена справочнику' };
        }
        throw new common_1.HttpException('Данные не верны', common_1.HttpStatus.NOT_FOUND);
    }
    async removeRole(dto) {
        const entityType = await this.entityTypeRepository.findByPk(dto.entityTypeId, { attributes: ['id'] });
        const propertyGroup = await this.propertyGroupRepository.findByPk(dto.propertyGroupId, { attributes: ['id'] });
        if (entityType && propertyGroup) {
            await entityType.$remove('propertyGroups', propertyGroup.id);
            return { code: 200, message: 'Группа полей удалена у справочника' };
        }
        throw new common_1.HttpException('Данные не верны', common_1.HttpStatus.NOT_FOUND);
    }
};
PropertyGroupsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(PropertyGroup_entity_1.PropertyGroup)),
    __param(1, (0, sequelize_1.InjectModel)(EntityType_entity_1.EntityType)),
    __param(2, (0, sequelize_1.InjectModel)(EntitySection_entity_1.EntitySection)),
    __param(3, (0, sequelize_1.InjectModel)(EntityItem_entity_1.EntityItem)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, sequelize_typescript_1.Sequelize])
], PropertyGroupsService);
exports.PropertyGroupsService = PropertyGroupsService;
//# sourceMappingURL=PropertyGroups.service.js.map