import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam, ApiBearerAuth } from "@nestjs/swagger";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { User } from './entities/users.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { AddRoleDto } from './dto/add-role.dto';
import Permission from './permissions.type';
import { AuthUser } from 'src/auth/auth-user.decorator';
import PermissionGuard from 'src/auth/permissions.guard';
import DocumentPermissionsGuard from 'src/auth/document-permissions.guard';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @ApiOperation({summary: 'Получение пользователем своих данных'})
    @ApiResponse({status: 200, type: User})
    @Get('/me')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async me(@AuthUser() user: User): Promise<User> {
        try {
        return await this.usersService.getUserByEmail(user.email);
        } catch (error) {
        throw new HttpException(user, HttpStatus.BAD_REQUEST); 
        }
    }

    @ApiOperation({summary: 'Обновление своих данных пользователем'})
    @ApiResponse({status: 200, type: User})
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Put('/me')
    async updateMe(@AuthUser() user: User, @Body() dto: UpdateUserDto){
        try {
            return this.usersService.updateUser(user.id, dto)
        } catch (error) {
            throw new HttpException(user, HttpStatus.BAD_REQUEST); 
        }
    }

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() dto: CreateUserDto){
        return this.usersService.createUser(dto)
    }

    @ApiOperation({summary: 'Обновление данных пользователя'})
    @ApiResponse({status: 200, type: User})
    @Put('/:id')
    update(@Param('id') id: number, @Body() dto: UpdateUserDto){
        return this.usersService.updateUser(id, dto)
    }

    @ApiOperation({summary: 'Удаление пользвателя'})
    @ApiResponse({status: 200})
    //@Roles('admin')
    //@UseGuards(RolesGuard)
    @Delete('/:id')
    destroyUser(@Param('id') id: number){
        return this.usersService.deleteUser(id)
    }

    @ApiOperation({summary: 'Получение всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    //@Roles('user')
    //@UseGuards(RolesGuard)
    @Get()
    getAll(){
        return this.usersService.getAllUsers()
    }

    @ApiOperation({summary: 'Получение пользователя по ID'})
    @ApiResponse({status: 200, type: [User]})
    //@Roles('user')
    //@UseGuards(RolesGuard)
    @Get('/id/:id')
    getById(@Param('id') id: number){
        return this.usersService.getUserById(id)
    }

    @ApiOperation({summary: 'Получение пользователя по Email'})
    @ApiResponse({status: 200, type: [User]})
    //@Roles('user')
    //@UseGuards(RolesGuard)
    @Get('/email/:email')
    getByEmail(@Param('email') email: string){
        return this.usersService.getUserByEmail(email)
    }

    @ApiOperation({summary: 'Добавление роли пользвателю'})
    @ApiResponse({status: 200, type: [User]})
    //@Roles('admin')
    //@UseGuards(RolesGuard)
    @Post('/add-role')
    addRole(@Body() dto: AddRoleDto){
        return this.usersService.addRole(dto)
    }

    @ApiOperation({summary: 'Удаление роли у пользвателя'})
    @ApiResponse({status: 200, type: [User]})
    //@Roles('admin')
    //@UseGuards(RolesGuard)
    @Post('/remove-role')
    removeRole(@Body() dto: AddRoleDto){
        return this.usersService.removeRole(dto)
    }

    @ApiOperation({summary: 'Получение списка прав доступа'})
    @ApiResponse({status: 200})
    //@Roles('user')
    //@UseGuards(RolesGuard)
    @Get('/permissions')
    getAllPermissions(){
        return Permission
    }

}
