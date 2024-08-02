import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IMember from '@db/members/member.interface';

@Injectable()
/**
 * @crystal23733 24.07.31
 * * 비밀번호 변경 로직
 */
@Injectable()
export class PasswordService {
  constructor(
    @InjectModel('Member') private readonly memberModel: Model<IMember>,
  ) {}

  async changePassword(
    name: string,
    oldPassword: string,
    newPassword: string,
  ): Promise<any> {
    const member = await this.memberModel.findOne({ name });
    if (!member) {
      throw new NotFoundException('사용자를 찾을 수 없습니다.');
    }
    if (member.password !== oldPassword) {
      throw new Error('이전 비밀번호가 일치하지 않습니다.');
    }
    member.password = newPassword;
    await member.save();
    return { message: '비밀번호가 성공적으로 변경되었습니다.' };
  }
}
