import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import IMember from '@db/members/member.interface';

@Injectable()
/**
 * @crystal23733 24.07.31
 * * 비밀번호 변경 로직
 */
export class ChangePasswordService {
  constructor(@InjectModel('Member') private readonly memberModel:Model<IMember>) {}
  async changePassword(memberID:string, oldPassword:string, newPassword:string):Promise<any> {
    const member = await this.memberModel.findById(memberID).exec();
    if(!member){
      throw new NotFoundException("회원이 존재하지 않습니다.");
    }
    if(member.password !== oldPassword){
      throw new UnauthorizedException("기존 비밀번호가 일치하지 않습니다.");
    }
    member.password = newPassword;
    await member.save();
    return {message : '비밀번호를 성공적으로 변경하였습니다!'};
  }
}