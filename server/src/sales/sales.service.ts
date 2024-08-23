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

/**
 * @crystal23733
 * @date 24.08.09
 * @description SaleService는 매출 기록을 처리하고 관리하는 서비스입니다.
 * 이 서비스는 판매 내역 조회, 특정 회원의 판매 내역 조회 및 판매 기록 생성 기능을 제공합니다.
 */
@Injectable()
export class SaleService {
  constructor(
    @InjectModel(Sale.name) private readonly saleModel: Model<ISale>,
    @InjectModel(Product.name) private readonly productModel: Model<IProduct>,
    @InjectModel(Member.name) private readonly memberModel: Model<IMember>, // Member 모델 주입
  ) {}

  /**
   * @crystal23733
   * @date 24.08.14
   * @description 모든 매출 기록을 조회합니다.
   * @returns {Promise<ISale[]>} 모든 매출 기록의 배열
   */
  async findAll(): Promise<ISale[]> {
    return this.saleModel
      .find()
      .populate('memberID')
      .populate('products.productID')
      .exec();
  }

  /**
   * @crystal23733
   * @date 24.07.29
   * @description 특정 매출 기록을 ID로 조회합니다.
   * @param {string} id - 매출 기록의 ID
   * @returns {Promise<ISale | null>} 특정 매출 기록 또는 null
   */
  async findById(id: string): Promise<ISale | null> {
    return this.saleModel
      .findById(id)
      .populate('memberID')
      .populate('products.productID')
      .exec();
  }

  /**
   * @crystal23733
   * @date 24.08.10
   * @description 특정 회원의 이메일을 기반으로 매출 기록을 조회합니다.
   * @param {string} email - 회원의 이메일
   * @returns {Promise<ISale[]>} 특정 회원의 매출 기록 배열
   * @throws {Error} 회원을 찾을 수 없는 경우 발생
   */
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
