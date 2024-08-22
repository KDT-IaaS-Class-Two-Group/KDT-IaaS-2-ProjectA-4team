// sale.service.ts
import IMember from '@db/members/member.interface';
import ISale from '@db/sale/Sale.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sale } from '../schemas/sale.schema';
import { Member } from '../schemas/member.schema';
import { Product } from '../schemas/product.schema';
import IProduct from '@db/products/product.interface';

@Injectable()
export class SaleService {
  constructor(
    @InjectModel(Sale.name) private readonly saleModel: Model<ISale>,
    @InjectModel(Product.name) private readonly productModel: Model<IProduct>,
    @InjectModel(Member.name) private readonly memberModel: Model<IMember>, // Member 모델 주입
  ) {}

  async findAll(): Promise<ISale[]> {
    return this.saleModel
      .find()
      .populate('memberID')
      .populate('products.productID')
      .exec();
  }

  async findById(id: string): Promise<ISale | null> {
    return this.saleModel
      .findById(id)
      .populate('memberID')
      .populate('products.productID')
      .exec();
  }

  async findByMemberName(email: string): Promise<ISale[]> {
    const member = await this.memberModel.findOne({ email }).exec();
    if (!member) {
      throw new Error('Member not found');
    }
    return this.saleModel
      .find({ memberID: member._id })
      .populate('memberID')
      .populate('products.productID')
      .exec();
  }

  /**
   * @yuxincxoi 24.08.12
   * * 구매 정보를 sale 데이터베이스에 저장
   * @param {string} email 구매한 사용자 이메일
   * @param {array} products 구매한 제품 데이터
   * @param {string} saleDate 구매한 날짜
   * @returns Promise<ISale> 구매 내역
   */
  async saleHistory(
    email: string,
    products: Array<{ productName: string; quantity: number }>,
    saleDate: string,
  ) {
    // member 데이터베이스에서 특정 email을 가진 사용자 찾기
    const member = await this.memberModel.findOne({ email }).exec();
    if (!member) {
      throw new Error('Member not found');
    }

    // 구매한 제품을 데이터베이스에서 조회하여
    // 단가와 구매한 개수로 총액 계산, 제품 id와 구매 수량 반환
    let totalPrice = 0;
    const productSales = await Promise.all(
      products.map(async (product) => {
        const productDoc = await this.productModel
          .findOne({ productName: product.productName })
          .exec();
        if (!productDoc) {
          throw new Error(`Product not found: ${product.productName}`);
        }
        totalPrice += productDoc.unitPrice * product.quantity;
        return {
          productID: productDoc._id,
          quantity: product.quantity,
        };
      }),
    );

    // 구매 내역 객체 생성
    const newSale = new this.saleModel({
      memberID: member._id,
      products: productSales,
      totalPrice,
      saleDate,
    });

    // 구매 내역 sale 데이터베이스에 저장
    const savedSale = await newSale.save();

    return this.saleModel
      .findById(savedSale._id)
      .populate({
        path: 'products.productID',
        select: 'name category price',
      })
      .exec();
  }
}
