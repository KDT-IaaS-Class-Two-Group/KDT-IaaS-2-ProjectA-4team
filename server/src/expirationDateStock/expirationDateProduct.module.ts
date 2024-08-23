import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { productsServiceDate } from './expirationDateProduct.service';
import { ProductsController } from './expirationDateProduct.controller';
import { Product, ProductSchema } from '../schemas/product.schema';
/**
 * @jojayeon 24.08.06
 * * 유통기한 관리 페이지 서버 모듈
 * @description
 * *controllers 컨트롤러 요청 처리
 * *providers 서비스 데이터 처리
 */

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [productsServiceDate],
})
export class expirationDateStockModule {}
