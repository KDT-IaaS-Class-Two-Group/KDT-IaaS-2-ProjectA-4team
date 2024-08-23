import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sale, SaleSchema } from '../schemas/sale.schema';
import { SaleService } from './sales.service';
import { SaleController } from './sales.controller';
import { AuthModule } from '../auth/auth.module';
import { MembersModule } from '../member/members.module';
import { productModule } from '../product/produdct.module';

/**
 * @crystal23733
 * @date 24.08.06
 * @module SaleModule
 * @description SaleModule은 매출 관련 기능을 제공하는 모듈입니다. 이 모듈은 매출 기록을 처리하고,
 * 관련 서비스를 제공하며, 인증 및 회원, 제품 모듈과 통합됩니다.
 *
 * @imports
 * - MongooseModule: Sale 스키마를 데이터베이스에 연결합니다.
 * - AuthModule: 인증 관련 기능을 제공합니다.
 * - MembersModule: 회원 관련 기능을 제공합니다.
 * - productModule: 제품 관련 기능을 제공합니다.
 *
 * @providers
 * - SaleService: 매출 기록과 관련된 비즈니스 로직을 처리합니다.
 *
 * @controllers
 * - SaleController: 매출 기록을 조회하고, 구매 기록을 기록하는 엔드포인트를 제공합니다.
 */
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sale.name, schema: SaleSchema }]),
    AuthModule,
    MembersModule,
    productModule,
  ],
  providers: [SaleService],
  controllers: [SaleController],
})
export class SaleModule {}
