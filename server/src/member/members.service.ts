// src/members/members.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IMember from '@db/members/member.interface';

@Injectable()
export class MembersService {
  constructor(
    @InjectModel('Member') private readonly memberModel: Model<IMember>,
  ) {}

  async findAll(): Promise<IMember[]> {
    return this.memberModel.find().exec();
  }
}
