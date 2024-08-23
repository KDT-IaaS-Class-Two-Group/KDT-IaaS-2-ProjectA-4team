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

/**
 * @crystal23733
 * @date 24.07.22
 * @module AppModule
 * @description NestJS 애플리케이션의 루트 모듈을 정의합니다.
 * @imports
 * - ConfigModule: 환경 변수를 설정합니다.
 * - MongooseModule: MongoDB와 연결합니다.
 * - SaleModule: 판매와 관련된 기능을 제공합니다.
 * - AuthModule: 인증 및 권한 관리를 처리합니다.
 * - StockModule: 재고 관리 기능을 제공합니다.
 * - MembersModule: 회원 관리 기능을 제공합니다.
 * - productModule: 제품 관리 기능을 제공합니다.
 * - expirationDateStockModule: 유통기한이 있는 제품 관리 기능을 제공합니다.
 * - LogsModule: 애플리케이션 로그를 처리합니다.
 */
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
