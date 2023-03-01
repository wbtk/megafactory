"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entityType_permissions_enum_1 = require("../entities/permissions/entityType.permissions.enum");
const entitySection_permissions_enum_1 = require("../entities/permissions/entitySection.permissions.enum");
const entityItem_permission_enum_1 = require("../entities/permissions/entityItem.permission.enum");
const PropertyGroup_permissions_1 = require("../entities/permissions/PropertyGroup.permissions");
const Property_permissions_1 = require("../entities/permissions/Property.permissions");
const PropertyValue_permissions_1 = require("../entities/permissions/PropertyValue.permissions");
const document_permissions_enum_1 = require("../documents/permissions/document.permissions.enum");
const order_permissions_enum_1 = require("../documents/permissions/order.permissions.enum");
const invoice_permissions_enum_1 = require("../documents/permissions/invoice.permissions.enum");
const file_permissions_1 = require("../files/permissions/file.permissions");
const permissions_enum_1 = require("../organizations/permissions.enum");
const Permission = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, entityType_permissions_enum_1.default), entitySection_permissions_enum_1.default), entityItem_permission_enum_1.default), PropertyGroup_permissions_1.default), Property_permissions_1.default), PropertyValue_permissions_1.default), document_permissions_enum_1.default), order_permissions_enum_1.default), invoice_permissions_enum_1.default), file_permissions_1.default), permissions_enum_1.default);
exports.default = Permission;
//# sourceMappingURL=permissions.type.js.map