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
exports.OrganizationsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const organization_entity_1 = require("./entities/organization.entity");
let OrganizationsService = class OrganizationsService {
    constructor(organizationRepository, sequelize) {
        this.organizationRepository = organizationRepository;
        this.sequelize = sequelize;
    }
    async create(createOrganizationDto, userId) {
        try {
            const result = await this.sequelize.transaction(async (t) => {
                const transactionHost = { transaction: t };
                const organization = await this.organizationRepository.create(Object.assign(Object.assign({}, createOrganizationDto), { creatorId: userId }), transactionHost);
                return organization;
            });
            return result;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    findAll() {
        return this.organizationRepository.findAll();
    }
    async findOne(id) {
        const organization = await this.organizationRepository.findByPk(id);
        if (!organization) {
            throw new common_1.HttpException('Организация не найдена', common_1.HttpStatus.NOT_FOUND);
        }
        return organization;
    }
    async update(id, updateOrganizationDto) {
        try {
            const organization = await this.findOne(id);
            if (!organization) {
                throw new common_1.HttpException('Организация не найдена', common_1.HttpStatus.NOT_FOUND);
            }
            return await organization.update(updateOrganizationDto);
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    async remove(id) {
        const organization = await this.organizationRepository.findByPk(id);
        if (!organization) {
            throw new common_1.HttpException('Организация не найдена', common_1.HttpStatus.NOT_FOUND);
        }
        organization.destroy();
        return { code: 200, message: 'Организация удалена' };
    }
};
OrganizationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(organization_entity_1.Organization)),
    __metadata("design:paramtypes", [Object, sequelize_typescript_1.Sequelize])
], OrganizationsService);
exports.OrganizationsService = OrganizationsService;
//# sourceMappingURL=organizations.service.js.map