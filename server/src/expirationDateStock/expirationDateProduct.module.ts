import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { productsServiceDate } from './expirationDateProduct.service';
import { ProductsController } from './expirationDateProduct.controller';
import productSchema from '@db/products/schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Products', schema: productSchema }]),
  ],
  controllers: [ProductsController],
  providers: [productsServiceDate],
})
export class expirationDateStockModule {}