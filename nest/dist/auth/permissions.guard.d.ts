import { CanActivate, Type } from "@nestjs/common";
import Permission from "src/users/permissions.type";
declare const PermissionGuard: (permission: Permission) => Type<CanActivate>;
export default PermissionGuard;
