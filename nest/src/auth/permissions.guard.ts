import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    Type,
    UnauthorizedException,
    mixin
} from "@nestjs/common";
import { UsersService } from "src/users/users.service"; 
import Permission from "src/users/permissions.type";
import { JwtService } from "@nestjs/jwt";

const PermissionGuard = (permission: Permission): Type<CanActivate> => {
    @Injectable()
    class PermissionGuardMixin implements CanActivate {
        constructor(private jwtService: JwtService, private userService: UsersService) {}
    
        async canActivate(context: ExecutionContext): Promise<boolean>{
            const req = context.switchToHttp().getRequest()
            try {
                const authHeader = req.headers.authorization;
                const bearer = authHeader.split(' ')[0]
                const token = authHeader.split(' ')[1]

                if (bearer !== 'Bearer' || !token) {
                    throw new UnauthorizedException({message: 'Пользователь не авторизован'})
                }
                
                const jwtUser = this.jwtService.verify(token) 
                
                const user = await this.userService.getUserById(jwtUser.id)
                req.user = user

                let allowed = false

                let permissionKey = null
                for (const key in Permission) {
                    if (Object.prototype.hasOwnProperty.call(Permission, key)) {
                        if(Permission[key] === permission){
                            permissionKey = key;
                        }
                    }
                }
                
                if(user.permissions.includes(permissionKey)){
                    allowed = true
                }

                user.roles.map((role) => {
                    if(role.permissions.includes(permissionKey)){
                        allowed = true
                    }
                })
    
                return allowed;
            } catch (e) {
                console.log(e)
                throw new HttpException( 'Нет доступа', HttpStatus.FORBIDDEN)
            }
        }
    
    }
    return mixin(PermissionGuardMixin);
}

export default PermissionGuard;
