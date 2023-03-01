"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationDocumentStatusPipe = void 0;
const common_1 = require("@nestjs/common");
const validation_exception_1 = require("../exceptions/validation.exception");
const options_1 = require("../documents/options/options");
let ValidationDocumentStatusPipe = class ValidationDocumentStatusPipe {
    async transform(value, metadata) {
        if (metadata.type === 'param') {
            if (Object.keys(options_1.OPTIONS.types).includes(value.type) && !Object.keys(options_1.OPTIONS.types[value.type].statuses).includes(value.status)) {
                throw new validation_exception_1.ValidationException(`${value} - неизвестный статус документа`);
            }
        }
        if (metadata.type === 'body') {
            if (Object.keys(options_1.OPTIONS.types).includes(value.type) && !Object.keys(options_1.OPTIONS.types[value.type].statuses).includes(value.status)) {
                throw new validation_exception_1.ValidationException(`${value.status} - неизвестный статус документа`);
            }
        }
        return value;
    }
};
ValidationDocumentStatusPipe = __decorate([
    (0, common_1.Injectable)()
], ValidationDocumentStatusPipe);
exports.ValidationDocumentStatusPipe = ValidationDocumentStatusPipe;
//# sourceMappingURL=validationDocumentStatus.pipe.js.map