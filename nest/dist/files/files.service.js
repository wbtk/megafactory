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
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const file_entity_1 = require("./entities/file.entity");
let FilesService = class FilesService {
    constructor(fileRepository, sequelize) {
        this.fileRepository = fileRepository;
        this.sequelize = sequelize;
    }
    async create(createFileDto, file, creatorId) {
        try {
            const result = await this.sequelize.transaction(async (t) => {
                const transactionHost = { transaction: t };
                const entity = await this.fileRepository.create(Object.assign(Object.assign({ filename: file.originalname, path: file.path, size: file.size, mimetype: file.mimetype }, createFileDto), { creatorId: creatorId }), transactionHost);
                return entity;
            });
            return result;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    findAll() {
        return `This action returns all files`;
    }
    findOne(id) {
        return `This action returns a #${id} file`;
    }
    update(id, updateFileDto) {
        return `This action updates a #${id} file`;
    }
    remove(id) {
        return `This action removes a #${id} file`;
    }
};
FilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(file_entity_1.File)),
    __metadata("design:paramtypes", [Object, sequelize_typescript_1.Sequelize])
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map