import { CanActivate, Type } from "@nestjs/common";
import Permission from "src/users/permissions.type";
declare const PermissionDocumentTypeGuard: (type: Permission) => Type<CanActivate>;
export default PermissionDocumentTypeGuard;
