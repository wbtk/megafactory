import { OrdersService } from '../services/orders.service';
import { Order } from '../entities/order.entity';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): Promise<Order[]>;
}
