import { BaseDTO } from './base.dto';
import { IMember } from './interfaces/member.interface';

// * MemberDTO 클래스
export class MemberDTO extends BaseDTO {
  public name: string;
  public email: string;
  public roleID: number;

  constructor(member: IMember) {
    super(member.name, member.email, member.roleID);
    this.name = member.name;
    this.email = member.email;
    this.roleID = member.roleID;
  }
}