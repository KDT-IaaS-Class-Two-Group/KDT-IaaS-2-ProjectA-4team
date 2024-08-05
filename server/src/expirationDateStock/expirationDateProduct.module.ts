import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { productsServiceDate } from './expirationDateProduct.service';
import { ProductsController } from './expirationDateProduct.controller';
import productSchema from '@db/products/schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: productSchema }]),
  ],
  controllers: [ProductsController],//컨트롤러
  providers: [productsServiceDate],//서비스
})
export class expirationDateStockModule {}