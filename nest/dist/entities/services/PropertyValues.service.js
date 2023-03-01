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
exports.PropertyValuesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const PropertyValue_entity_1 = require("../entities/PropertyValue.entity");
const Property_entity_1 = require("../entities/Property.entity");
const Properties_service_1 = require("./Properties.service");
let PropertyValuesService = class PropertyValuesService {
    constructor(propertyRepository, propertiesService, propertyValueRepository, sequelize) {
        this.propertyRepository = propertyRepository;
        this.propertiesService = propertiesService;
        this.propertyValueRepository = propertyValueRepository;
        this.sequelize = sequelize;
    }
    async create(createPropertyValueDto, userId) {
        try {
            const result = await this.sequelize.transaction(async (t) => {
                const transactionHost = { transaction: t };
                const lastSortValue = await this.propertyValueRepository.findOne({
                    order: [['sort', 'DESC']],
                    attributes: ['sort']
                }).then(value => value ? value.sort : 0);
                const property = await this.propertyRepository.findByPk(createPropertyValueDto.propertyId, { attributes: ['multiple'] });
                if (lastSortValue && !property.multiple) {
                    throw new common_1.HttpException('Свойство уже имеет значение', common_1.HttpStatus.BAD_REQUEST);
                }
                return await this.propertyValueRepository.create(Object.assign(Object.assign({ sort: lastSortValue + 1 }, createPropertyValueDto), { creatorId: userId }), transactionHost);
            });
            return result;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    async findAll() {
        return await this.propertyValueRepository.findAll();
    }
    async findById(id, paranoid = true) {
        const propertyValue = await this.propertyValueRepository.findByPk(id, { paranoid: paranoid });
        if (!propertyValue) {
            throw new common_1.HttpException('Значение свойства не найдено', common_1.HttpStatus.NOT_FOUND);
        }
        return propertyValue;
    }
    async findByProperty(propertyId) {
        const property = await this.propertiesService.findById(propertyId);
        return await this.propertyValueRepository.findAll({
            where: { propertyId: propertyId },
            attributes: ['id', `${property.dataType}`],
            order: property.multiple ? [['sort', 'ASC']] : [['id', 'DESC']],
            limit: property.multiple ? null : 1
        });
    }
    async update(id, updatePropertyValueDto, userId) {
        try {
            const result = await this.sequelize.transaction(async (t) => {
                const transactionHost = { transaction: t };
                const propertyValue = await this.findById(id);
                return await propertyValue.update(updatePropertyValueDto, transactionHost);
            });
            return result;
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
                const propertyValue = await this.findById(id);
                await propertyValue.update({ destroyerId: userId }, transactionHost);
                await propertyValue.destroy(transactionHost);
                return { code: 200, message: 'Значение свойства удалено' };
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
                const propertyValue = await this.findById(id, false);
                if (!propertyValue.deletedAt) {
                    throw new common_1.HttpException('Значение свойства не удалено', common_1.HttpStatus.BAD_REQUEST);
                }
                await propertyValue.update({ destroyerId: null }, transactionHost);
                await propertyValue.restore(transactionHost);
                return { code: 200, message: 'Значение свойства восстановлено' };
            });
            return result;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
};
PropertyValuesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(Property_entity_1.Property)),
    __param(2, (0, sequelize_1.InjectModel)(PropertyValue_entity_1.PropertyValue)),
    __metadata("design:paramtypes", [Object, Properties_service_1.PropertiesService, Object, sequelize_typescript_1.Sequelize])
], PropertyValuesService);
exports.PropertyValuesService = PropertyValuesService;
//# sourceMappingURL=PropertyValues.service.js.map