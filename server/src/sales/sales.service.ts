// sale.service.ts
import ISale from '@db/sale/Sale.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SaleService {
  constructor(@InjectModel('Sale') private readonly saleModel: Model<ISale>) {}

  async findAll(): Promise<ISale[]> {
    return this.saleModel.find().exec();
  }

  async findById(id: string): Promise<ISale | null> {
    return this.saleModel.findById(id).exec();
  }

  async findByMemberID(memberID: string): Promise<ISale[]> {
    return this.saleModel.find({ memberID }).exec();
  }

  async saleHistory(
    memberID: string,
    productID: string,
    quantity: number,
    totalPrice: number,
    saleDate: string,
  ) {
    const newSale = new this.saleModel({
      memberID,
      productID,
      quantity,
      totalPrice,
      saleDate,
    });

    return await newSale.save();
  }
}
