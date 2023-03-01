"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationDocumentTypePipe = void 0;
const common_1 = require("@nestjs/common");
const validation_exception_1 = require("../exceptions/validation.exception");
const options_1 = require("../documents/options/options");
let ValidationDocumentTypePipe = class ValidationDocumentTypePipe {
    async transform(value, metadata) {
        if (metadata.type === 'param') {
            if (!Object.keys(options_1.OPTIONS.types).includes(value)) {
                throw new validation_exception_1.ValidationException(`${value} - неизвестный тип документа`);
            }
        }
        if (metadata.type === 'body') {
            if (!Object.keys(options_1.OPTIONS.types).includes(value.type)) {
                throw new validation_exception_1.ValidationException(`${value.type} - неизвестный тип документа`);
            }
        }
        return value;
    }
};
ValidationDocumentTypePipe = __decorate([
    (0, common_1.Injectable)()
], ValidationDocumentTypePipe);
exports.ValidationDocumentTypePipe = ValidationDocumentTypePipe;
//# sourceMappingURL=validationDocumentType.pipe.js.map