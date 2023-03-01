"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = void 0;
const document_permissions_enum_1 = require("./document.permissions.enum");
const order_permissions_enum_1 = require("./order.permissions.enum");
const invoice_permissions_enum_1 = require("./invoice.permissions.enum");
exports.permissions = Object.assign(Object.assign(Object.assign({}, document_permissions_enum_1.default), order_permissions_enum_1.default), invoice_permissions_enum_1.default);
//# sourceMappingURL=permissions.js.map