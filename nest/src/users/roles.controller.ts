import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { Role } from './entities/roles.entity';

@ApiTags('Роли')
@Controller('roles')
export class RolesController {

    constructor(private roleService: RolesService){}

    @ApiOperation({summary: 'Создание роли'})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() dto: CreateRoleDto){
        return this.roleService.createRole(dto)
    }

    @ApiOperation({summary: 'Обновление данных роли'})
    @ApiResponse({status: 200, type: Role})
    @Put('/:id')
    update(@Param('id') id: number, @Body() dto: CreateRoleDto){
        return this.roleService.updateRole(id, dto)
    }

    @ApiOperation({summary: 'Получение всех ролей'})
    @ApiResponse({status: 200, type: [Role]})
    //@Roles('user')
    //@UseGuards(RolesGuard)
    @Get()
    getAll(){
        return this.roleService.getAllRoles()
    }

    @ApiOperation({summary: 'Получение роли по названию'})
    @ApiResponse({status: 200, type: [Role]})
    @Get('/:name')
    getByName(@Param('name') name: string){
        return this.roleService.getRoleByName(name)
    }

    @ApiOperation({summary: 'Удаление роли'})
    @ApiResponse({status: 200})
    //@Roles('admin')
    //@UseGuards(RolesGuard)
    @Delete('/:id')
    destroyUser(@Param('id') id: number){
        return this.roleService.deleteRole(id)
    }

}
