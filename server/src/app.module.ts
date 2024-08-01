import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleModule } from './sales/sales.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/rockcodersERP'),
    SaleModule,
    StockModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
