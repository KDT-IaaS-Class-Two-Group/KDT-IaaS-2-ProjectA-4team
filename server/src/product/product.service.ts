import IProduct from '@db/products/product.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<IProduct>,
  ) {}

  async getAllProducts(): Promise<IProduct[]> {
    try {
      const product = await this.productModel.find().exec();
      return product;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
