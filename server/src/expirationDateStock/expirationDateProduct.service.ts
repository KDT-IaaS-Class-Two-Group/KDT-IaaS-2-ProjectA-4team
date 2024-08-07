//서비스 
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IProduct from '@db/products/product.interface';
/**
 * @jojayeon 24.08.06
 * * 유통기한 관리 페이지 서버 서비스
 */
@Injectable()
export class productsServiceDate {
  constructor(
    @InjectModel("Product") private readonly productModel: Model<IProduct>,
  ) {}

  async findAll(): Promise<IProduct[]> {
    const product = await this.productModel.find().exec();
    console.log("찾을게유")
    return product
  }

  async remove(id: string): Promise<void> {
    await this.productModel.deleteOne({ _id: id }).exec();
  console.log("폐기해유")
  }
}
