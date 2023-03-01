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

const DocumentPermissionsGuard = (permission: string): Type<CanActivate> => {
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

                // Получение типа документа
                let documentType = null
                if(req.params) {
                    for (const key in req.params) {
                        if(key === 'type'){
                            const type = req.params[key];
                            documentType = type[0].toUpperCase() + type.slice(1)
                        }
                    }
                }

                if(req.body) {
                    for (const key in req.body) {
                        if(key === 'type'){
                            const type = req.body[key];
                            documentType = type[0].toUpperCase() + type.slice(1)
                        }
                    }
                }

                let allowed = false

                let permissionKey = null
                for (const key in Permission) {
                    if(key === permission + documentType){
                        permissionKey = key;
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

export default DocumentPermissionsGuard;
