import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleModule } from './sales/sales.module';
import { AuthModule } from './auth/auth.module';
import { StockModule } from './stock/stock.module';
import { MembersModule } from './member/members.module';
import { productModule } from './product/produdct.module';
import { expirationDateStockModule } from './expirationDateStock/expirationDateProduct.module';
import { ConfigModule } from '@nestjs/config';
import { LogsModule } from './log/logs.module';

@Module({
  imports: [
    // ConfigModule 설정 - 환경 변수 관리
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/rockcodersERP'),
    SaleModule,
    AuthModule,
    StockModule,
    MembersModule,
    productModule,
    expirationDateStockModule,
    LogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
