import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { UsersService } from 'src/users/users.service';
export declare class IsEmailNotRegistered implements ValidatorConstraintInterface {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(email: any): Promise<boolean>;
}
export declare function EmailNotRegistered(validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
