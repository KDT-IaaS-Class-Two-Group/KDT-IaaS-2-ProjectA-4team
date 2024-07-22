import IMember from '../../../db/members/member.interface';
import { BaseDTO } from './base.dto';

// * MemberDTO 클래스
export class MemberDTO extends BaseDTO {
  public name: string;
  public email: string;
  public roleID: number;

  constructor(member: IMember) {
    super(member.name, member.email, member.roleID, member.password);
    this.name = member.name;
    this.email = member.email;
    this.roleID = member.roleID;
    this.password = member.password;
  }
}