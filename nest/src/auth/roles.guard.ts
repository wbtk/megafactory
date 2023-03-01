import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException
} from "@nestjs/common";
import {Observable} from "rxjs";
import { UsersService } from "src/users/users.service"; 
import {Reflector} from "@nestjs/core";
import {ROLES_KEY} from "./roles-auth.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private userService: UsersService, private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        
        try {
            const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass(),
            ])
            
            if (!requiredRoles) {
                return true;
            }
            
            const req = context.switchToHttp().getRequest()
            return req.user.roles.some(role => requiredRoles.includes(role.name));
        } catch (e) {
            console.log(e)
            throw new HttpException( 'Нет доступа', HttpStatus.FORBIDDEN)
        }
    }

}