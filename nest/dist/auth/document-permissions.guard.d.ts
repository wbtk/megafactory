import { CanActivate, Type } from "@nestjs/common";
declare const DocumentPermissionsGuard: (permission: string) => Type<CanActivate>;
export default DocumentPermissionsGuard;
