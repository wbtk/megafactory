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
exports.DocumentsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("@nestjs/sequelize");
const document_entity_1 = require("../entities/document.entity");
const options_1 = require("../options/options");
const users_entity_1 = require("../../users/entities/users.entity");
const roles_entity_1 = require("../../users/entities/roles.entity");
let DocumentsService = class DocumentsService {
    constructor(documentRepository, sequelize) {
        this.documentRepository = documentRepository;
        this.sequelize = sequelize;
    }
    async create(createDocumentDto, userId) {
        this.validationDocumentProperties(createDocumentDto.type, createDocumentDto);
        try {
            const result = await this.sequelize.transaction(async (t) => {
                const transactionHost = { transaction: t };
                const documentNumber = await this.generateDucumentNumber(createDocumentDto.type);
                const document = await this.documentRepository.create(Object.assign(Object.assign({}, createDocumentDto), { creatorId: userId, number: documentNumber, status: createDocumentDto.status ? createDocumentDto.status : Object.keys(options_1.OPTIONS.types[createDocumentDto.type]['statuses'])[0] }), transactionHost);
                return document;
            });
            return result;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    findAll() {
        return this.documentRepository.findAll();
    }
    async findAllByType(type) {
        const documents = await this.documentRepository.findAll({
            where: { type: type },
            include: [
                {
                    model: users_entity_1.User,
                    attributes: ['id', 'lastname', 'firstname', 'patronymic', 'email'],
                    include: [{
                            model: roles_entity_1.Role,
                            attributes: ['id', 'name'],
                        }]
                }
            ]
        });
        for (let [index, document] of Object.entries(documents)) {
            const properties = document.properties;
            Object.entries(properties).forEach(element => {
                documents[index]['dataValues'][[element[0]]] = element[1];
            });
        }
        return documents;
    }
    async findOne(id) {
        const document = await this.documentRepository.findByPk(id);
        if (!document) {
            throw new common_1.HttpException('Документ не найден', common_1.HttpStatus.NOT_FOUND);
        }
        return document;
    }
    async findByNumber(type, number) {
        return await this.documentRepository.findAll({ where: { type: type, number: number } });
    }
    async update(id, updateDocumentDto) {
        try {
            const result = await this.sequelize.transaction(async (t) => {
                const transactionHost = { transaction: t };
                const document = await this.documentRepository.findByPk(id);
                if (!document) {
                    throw new common_1.HttpException('Документ не найден', common_1.HttpStatus.NOT_FOUND);
                }
                this.validationDocumentProperties(document.type, updateDocumentDto);
                return await document.update(updateDocumentDto, transactionHost);
            });
            return result;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    async remove(id) {
        const document = await this.documentRepository.findByPk(id);
        if (!document) {
            throw new common_1.HttpException('Документ не найден', common_1.HttpStatus.NOT_FOUND);
        }
        document.destroy();
        return { code: 200, message: 'Документ удален' };
    }
    async generateDucumentNumber(type) {
        const lastDocument = await this.documentRepository.findOne({
            where: {
                type: type
            },
            attributes: ['number'],
            order: [['number', 'DESC']],
            paranoid: false
        });
        return lastDocument ? ++lastDocument.number : 1;
    }
    getJsonProperties(type) {
        return options_1.OPTIONS.types[type].properties;
    }
    getDocumentStatuses(type) {
        return options_1.OPTIONS.types[type].statuses;
    }
    validationDocumentProperties(type, dto) {
        if (Object.keys(dto).includes('properties') && typeof dto.properties != 'object') {
            throw new common_1.HttpException('Отсутвуют доп. поля или неправильный формат', common_1.HttpStatus.BAD_REQUEST);
        }
        const documentProperties = options_1.OPTIONS.types[type].properties;
        for (const key in dto.properties) {
            if (Object.prototype.hasOwnProperty.call(dto.properties, key)) {
                if (!Object.keys(documentProperties).includes(key)) {
                    throw new common_1.HttpException(`Поле ${key} отсутсвует в документе`, common_1.HttpStatus.BAD_REQUEST);
                }
            }
        }
    }
};
DocumentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(document_entity_1.Document)),
    __metadata("design:paramtypes", [Object, sequelize_typescript_1.Sequelize])
], DocumentsService);
exports.DocumentsService = DocumentsService;
//# sourceMappingURL=documents.service.js.map