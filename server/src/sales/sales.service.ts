// sale.service.ts
import IMember from '@db/members/member.interface';
import ISale from '@db/sale/Sale.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sale } from '../schemas/sale.schema';
import { Member } from '../schemas/member.schema';

@Injectable()
export class SaleService {
  constructor(
    @InjectModel(Sale.name) private readonly saleModel: Model<ISale>,
    @InjectModel(Member.name) private readonly memberModel: Model<IMember>, // Member 모델 주입
  ) {}

  async findAll(): Promise<ISale[]> {
    return this.saleModel.find().populate('memberID').exec();
  }

  async findById(id: string): Promise<ISale | null> {
    return this.saleModel.findById(id).populate('memberID').exec();
  }

  async findByMemberName(name: string): Promise<ISale[]> {
    const member = await this.memberModel.findOne({ name }).exec();
    if (!member) {
      throw new Error('Member not found');
    }
    return this.saleModel
      .find({ memberID: member._id })
      .populate('memberID')
      .exec();
  }
}
