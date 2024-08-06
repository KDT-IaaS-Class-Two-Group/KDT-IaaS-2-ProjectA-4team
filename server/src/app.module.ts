import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleModule } from './sales/sales.module';
import { AuthModule } from './auth/auth.module';
import { StockModule } from './stock/stock.module';
import { PasswordModule } from './changePassword/changePassword.module';
import { MembersModule } from './member/members.module';
import { expirationDateStockModule } from './expirationDateStock/expirationDateProduct.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/rockcodersERP'),
    SaleModule,
    AuthModule,
    StockModule,
    PasswordModule,
    MembersModule,
    expirationDateStockModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
