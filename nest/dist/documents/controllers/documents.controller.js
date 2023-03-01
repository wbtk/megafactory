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
exports.DocumentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const document_entity_1 = require("../entities/document.entity");
const documents_service_1 = require("../services/documents.service");
const document_permissions_guard_1 = require("../../auth/document-permissions.guard");
const create_document_dto_1 = require("../dto/create-document.dto");
const update_document_dto_1 = require("../dto/update-document.dto");
const validationDocumentType_pipe_1 = require("../../pipes/validationDocumentType.pipe");
const validationDocumentStatus_pipe_1 = require("../../pipes/validationDocumentStatus.pipe");
let DocumentsController = class DocumentsController {
    constructor(documentsService) {
        this.documentsService = documentsService;
    }
    create(createDocumentDto, req) {
        return this.documentsService.create(createDocumentDto, req.user.id);
    }
    findAll() {
        return this.documentsService.findAll();
    }
    findAllByType(type) {
        return this.documentsService.findAllByType(type);
    }
    findOne(id) {
        return this.documentsService.findOne(+id);
    }
    findByNumber(type, number) {
        return this.documentsService.findByNumber(type, +number);
    }
    update(id, updateDocumentDto) {
        return this.documentsService.update(+id, updateDocumentDto);
    }
    remove(id) {
        return this.documentsService.remove(+id);
    }
    getJsonProperties(type) {
        return this.documentsService.getJsonProperties(type);
    }
    getDocumentStatuses(type) {
        return this.documentsService.getDocumentStatuses(type);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание документа' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: document_entity_1.Document }),
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(validationDocumentType_pipe_1.ValidationDocumentTypePipe),
    (0, common_1.UsePipes)(validationDocumentStatus_pipe_1.ValidationDocumentStatusPipe),
    (0, common_1.UseGuards)((0, document_permissions_guard_1.default)('Create')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_document_dto_1.CreateDocumentDto, Object]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)((0, document_permissions_guard_1.default)('List')),
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех документов' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [document_entity_1.Document] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех документов по типу' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [document_entity_1.Document] }),
    (0, common_1.UseGuards)((0, document_permissions_guard_1.default)('List')),
    (0, common_1.UsePipes)(validationDocumentType_pipe_1.ValidationDocumentTypePipe),
    (0, common_1.Get)('type/:type'),
    __param(0, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "findAllByType", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение документа по ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: document_entity_1.Document }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение документа по номеру' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: document_entity_1.Document }),
    (0, common_1.Get)(':type/number/:number'),
    __param(0, (0, common_1.Param)('type')),
    __param(1, (0, common_1.Param)('number')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "findByNumber", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление данных документа' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: document_entity_1.Document }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_document_dto_1.UpdateDocumentDto]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление данных документа' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: document_entity_1.Document }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение списка дополнительных полей документа' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Array }),
    (0, common_1.Get)(':type/properties'),
    __param(0, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "getJsonProperties", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение списка статусов у типа документа' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Array }),
    (0, common_1.Get)(':type/statuses'),
    __param(0, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "getDocumentStatuses", null);
DocumentsController = __decorate([
    (0, swagger_1.ApiTags)('Документы'),
    (0, common_1.Controller)('documents'),
    __metadata("design:paramtypes", [documents_service_1.DocumentsService])
], DocumentsController);
exports.DocumentsController = DocumentsController;
//# sourceMappingURL=documents.controller.js.map