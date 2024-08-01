import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema'; // 경로를 실제 경로로 수정

@Injectable()
export class SeederService implements OnModuleInit {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async onModuleInit() {
    await this.seedProducts();
  }

  private async seedProducts() {
    // 기존 데이터를 삭제 (선택 사항)
    await this.productModel.deleteMany({});

    // 더미 데이터 정의
    const dummyProducts = [
      new this.productModel({
        productCategory: '빵',
        productName: '부시맨브래드',
        unitPrice: 699,
        quantity: 100,
        restockDate: new Date('2024-05-01'),
        expirationDate: new Date('2025-05-01'),
      }),
      new this.productModel({
        productCategory: '패티',
        productName: '다람이꼬리 패티',
        unitPrice: 499,
        quantity: 50,
        restockDate: new Date('2024-06-01'),
        expirationDate: new Date('2026-06-01'),
      }),
      new this.productModel({
        productCategory: '음료',
        productName: '징징이먹물',
        unitPrice: 299,
        quantity: 30,
        restockDate: new Date('2024-07-01'),
        expirationDate: new Date('2025-07-01'),
      }),
    ];

    // 데이터 삽입
    await this.productModel.insertMany(dummyProducts);
    console.log('Dummy products inserted successfully.');
  }
}
