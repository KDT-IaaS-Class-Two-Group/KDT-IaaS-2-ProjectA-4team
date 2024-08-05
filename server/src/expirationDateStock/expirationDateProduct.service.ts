//서비스 
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IProduct from '@db/products/product.interface';

@Injectable()
export class productsServiceDate {
  constructor(
    @InjectModel("Product") private readonly productModel: Model<IProduct>,
  ) {}

  async findAll(): Promise<IProduct[]> {
    const products = await this.productModel.find().exec();
    console.log("찾을게유")
    return products
  }

  async remove(id: string): Promise<void> {
    await this.productModel.deleteOne({ _id: id }).exec();
  console.log("삭제할게유")
  }
}