import IProduct from '@db/products/product.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<IProduct>,
  ) {}

  /**
   * @yuxincxoi 24.08.08
   * * 데이터베이스의 product 전제 데이터 가져오기
   * @returns product
   */
  async getAllProducts(): Promise<IProduct[]> {
    try {
      const product = await this.productModel.find().exec();
      return product;
    } catch (error) {
      return [];
    }
  }
}
