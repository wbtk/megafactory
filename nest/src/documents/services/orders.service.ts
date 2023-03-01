import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { DocumentsService } from './documents.service';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrdersService {
    constructor(
    @InjectModel(Order) private orderRepository: typeof Order, 
    private sequelize: Sequelize,
    private readonly documentsService: DocumentsService
    ){} 

    findAll(){
        return this.orderRepository.findAll()
    }
}