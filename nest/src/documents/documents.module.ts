import { forwardRef, Module } from '@nestjs/common';
import { Document } from './entities/document.entity'
import { DocumentsService } from './services/documents.service';
import { DocumentsController } from './controllers/documents.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
import { Order } from './entities/order.entity';

@Module({
  controllers: [
    DocumentsController,
    OrdersController
  ],
  providers: [
    DocumentsService,
    OrdersService
  ],
  imports: [
    SequelizeModule.forFeature([Document, Order]),
    forwardRef(() => UsersModule),
    forwardRef(() => AuthModule)
  ],
  exports: [DocumentsService, OrdersService],

})
export class DocumentsModule {}
