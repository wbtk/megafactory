"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDocumentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_document_dto_1 = require("./create-document.dto");
class UpdateDocumentDto extends (0, swagger_1.PartialType)(create_document_dto_1.CreateDocumentDto) {
}
exports.UpdateDocumentDto = UpdateDocumentDto;
//# sourceMappingURL=update-document.dto.js.map