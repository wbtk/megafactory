"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsModule = void 0;
const common_1 = require("@nestjs/common");
const document_entity_1 = require("./entities/document.entity");
const documents_service_1 = require("./services/documents.service");
const documents_controller_1 = require("./controllers/documents.controller");
const sequelize_1 = require("@nestjs/sequelize");
const auth_module_1 = require("../auth/auth.module");
const users_module_1 = require("../users/users.module");
const orders_controller_1 = require("./controllers/orders.controller");
const orders_service_1 = require("./services/orders.service");
const order_entity_1 = require("./entities/order.entity");
let DocumentsModule = class DocumentsModule {
};
DocumentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            documents_controller_1.DocumentsController,
            orders_controller_1.OrdersController
        ],
        providers: [
            documents_service_1.DocumentsService,
            orders_service_1.OrdersService
        ],
        imports: [
            sequelize_1.SequelizeModule.forFeature([document_entity_1.Document, order_entity_1.Order]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule)
        ],
        exports: [documents_service_1.DocumentsService, orders_service_1.OrdersService],
    })
], DocumentsModule);
exports.DocumentsModule = DocumentsModule;
//# sourceMappingURL=documents.module.js.map