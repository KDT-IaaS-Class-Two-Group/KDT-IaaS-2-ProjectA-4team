import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import 컨트롤러 불러오기
// import 서비스 불러오기 

import productSchema from '@db/products/schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: productSchema }]),
  ],
  controllers: [],//컨트롤러
  providers: [],//서비스
})
export class expirationDateStockModule {}