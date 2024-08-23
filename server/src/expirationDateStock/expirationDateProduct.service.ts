//서비스
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IProduct from '@db/products/product.interface';

/**
 * @jojayeon 24.08.06
 * * 유통기한 관리 페이지 서비스
 * @description
 * *이 서비스는 제품 데이터를 MongoDB에서 관리하는 기능을 제공합니다. 
 * *제품의 조회, 삭제, 생성 기능을 수행합니다.
 */
@Injectable()
export class productsServiceDate {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<IProduct>,
  ) {}

/**
 * 제품을 조회한다.
 * @returns {Promise<IProduct[]>} product 전체 데이터를 찾아서 반환
 */
  async findAll(): Promise<IProduct[]> {
    const product = await this.productModel.find().exec();
    return product;
  }

/**
 * 제품을 삭제한다.
 * @param {string}id - 삭제할 id전달
 * @param {Promise<void>} remove id를 찾아서 제거하는 역할
 */
  async remove(id: string): Promise<void> {
    await this.productModel.deleteOne({ _id: id }).exec();
  }

/**
 * 제품을 생성한다.
 * @param {IProduct} product 생성할 데이터
 * @returns {Promise<IProduct>} savedProduct 데이터가 들어갈 수 있게 처리후 제품을 생성하고 반환
 */
  async create(product: IProduct): Promise<IProduct> {
    const createdProduct = new this.productModel(product);
    createdProduct._id = createdProduct._id.toString();
    const savedProduct = await createdProduct.save();
    return savedProduct;
  }
}
