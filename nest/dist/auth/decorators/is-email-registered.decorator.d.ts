import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { UsersService } from 'src/users/users.service';
export declare class IsUserAlreadyExistConstraint implements ValidatorConstraintInterface {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(email: any, args: ValidationArguments): boolean;
}
export declare function IsUserAlreadyExist(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
