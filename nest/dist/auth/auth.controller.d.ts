import { CreateUserDto } from "../users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { AuthUserDto } from './dto/auth-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: AuthUserDto): Promise<{
        accessToken: string;
    }>;
    registration(userDto: CreateUserDto): Promise<{
        accessToken: string;
    }>;
}
