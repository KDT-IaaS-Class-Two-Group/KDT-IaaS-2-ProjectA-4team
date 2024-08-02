import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findById(id: string): Promise<IMember> {
    const member = await this.memberModel.findById(id).exec();
    if (!member) {
      throw new NotFoundException(`Member with id ${id} not found`);
    }
    return member;
  }

  async updateRole(id: string, newRole: number): Promise<IMember> {
    const updatedMember = await this.memberModel
      .findByIdAndUpdate(id, { roleID: newRole }, { new: true })
      .exec();
    if (!updatedMember) {
      throw new NotFoundException(`Member with id ${id} not found`);
    }
    return updatedMember;
  }
}
