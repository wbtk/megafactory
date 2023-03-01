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
exports.PropertiesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const Property_entity_1 = require("../entities/Property.entity");
const PropertyValue_entity_1 = require("../entities/PropertyValue.entity");
let PropertiesService = class PropertiesService {
    constructor(propertyRepository, sequelize) {
        this.propertyRepository = propertyRepository;
        this.sequelize = sequelize;
    }
    async create(createPropertyDto, userId) {
        try {
            return await this.propertyRepository.create(Object.assign(Object.assign({}, createPropertyDto), { creatorId: userId }));
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    findAllByGroup(groupId, paranoid = true) {
        return this.propertyRepository.findAll({
            where: {
                propertyGroupId: groupId
            },
            order: [['sort', 'ASC']],
            paranoid: paranoid
        });
    }
    findAllByGroupWithTrashed(groupId) {
        return this.findAllByGroup(groupId, false);
    }
    async findById(id, paranoid = true) {
        let property = await this.propertyRepository.findByPk(id, {
            paranoid: paranoid
        });
        if (!property) {
            throw new common_1.HttpException('Свойство не найдено', common_1.HttpStatus.NOT_FOUND);
        }
        return property;
    }
    async update(id, updatePropertyDto) {
        try {
            const property = await this.findById(id);
            return await property.update(updatePropertyDto);
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
                const property = await this.propertyRepository.findByPk(id, {
                    include: [
                        {
                            model: PropertyValue_entity_1.PropertyValue,
                            attributes: ['id']
                        }
                    ],
                });
                if (property.values.length) {
                    throw new common_1.HttpException('Свойство имеет значения', common_1.HttpStatus.BAD_REQUEST);
                }
                await property.update({ destroyerId: userId }, transactionHost);
                await property.destroy(transactionHost);
                return { code: 200, message: 'Свойство удалено' };
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
                const property = await this.findById(id, false);
                if (!property.deletedAt) {
                    throw new common_1.HttpException('Свойство не удалено', common_1.HttpStatus.BAD_REQUEST);
                }
                await property.update({ destroyerId: null }, transactionHost);
                await property.restore(transactionHost);
                return { code: 200, message: 'Свойство восстановлено' };
            });
            return result;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
};
PropertiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(Property_entity_1.Property)),
    __metadata("design:paramtypes", [Object, sequelize_typescript_1.Sequelize])
], PropertiesService);
exports.PropertiesService = PropertiesService;
//# sourceMappingURL=Properties.service.js.map