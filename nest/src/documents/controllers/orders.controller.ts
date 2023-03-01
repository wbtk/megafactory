
import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam, ApiProperty } from "@nestjs/swagger";
import { DocumentsService } from '../services/documents.service';
import { OrdersService } from '../services/orders.service';
import { Order } from '../entities/order.entity';
import PermissionGuard from 'src/auth/permissions.guard';
import Permission from 'src/users/permissions.type';

@ApiTags('Документы')
@Controller('orders')
export class OrdersController {
    constructor(
        private readonly ordersService: OrdersService
        ) {}

    @ApiOperation({summary: 'Получение всех заказов'})
    @ApiResponse({status: 200, type: [Order]})
    @Get()
    @UseGuards(PermissionGuard(Permission.ListOrder))
    findAll() {
        return this.ordersService.findAll();
    }
}