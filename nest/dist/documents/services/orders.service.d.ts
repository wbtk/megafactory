import { Sequelize } from 'sequelize-typescript';
import { DocumentsService } from './documents.service';
import { Order } from '../entities/order.entity';
export declare class OrdersService {
    private orderRepository;
    private sequelize;
    private readonly documentsService;
    constructor(orderRepository: typeof Order, sequelize: Sequelize, documentsService: DocumentsService);
    findAll(): Promise<Order[]>;
}
