import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { productsServiceDate } from './expirationDateProduct.service';
import { ProductsController } from './expirationDateProduct.controller';
import productSchema from '@db/products/schema/product.schema';
/**
 * @jojayeon 24.08.06
 * * 유통기한 관리 페이지 서버 모듈
 */

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: productSchema }]),
  ],
  controllers: [ProductsController],
  providers: [productsServiceDate],
})
export class expirationDateStockModule {}