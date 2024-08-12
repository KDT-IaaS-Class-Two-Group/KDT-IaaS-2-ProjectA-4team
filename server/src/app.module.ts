import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleModule } from './sales/sales.module';
import { AuthModule } from './auth/auth.module';
import { StockModule } from './stock/stock.module';
import { MembersModule } from './member/members.module';
import { productModule } from './product/produdct.module';
import { expirationDateStockModule } from './expirationDateStock/expirationDateProduct.module';
import { LogsModule } from './log/logs.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.env.production'
          : '.env.development',
      isGlobal: true, // 환경 변수를 전역에서 사용 가능하도록 설정
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
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
