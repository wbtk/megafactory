import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { UsersService } from "src/users/users.service";
import { Reflector } from "@nestjs/core";
export declare class RolesGuard implements CanActivate {
    private userService;
    private reflector;
    constructor(userService: UsersService, reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
