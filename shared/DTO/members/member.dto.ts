import IMember from '../../../db/members/member.interface';
import { BaseDTO } from './base.dto';

/**
 * * MemberDTO 클래스
 * @crystal23733 24.07.22
 * @description `BaseDTO`를 상속하여 회원 정보를 처리하는 DTO 클래스입니다.
 */
export class MemberDTO extends BaseDTO {
  public name: string;
  public email: string;
  public roleID: number;

  /**
   * @param member - `IMember` 인터페이스를 구현한 객체
   */
  constructor(member: IMember) {
    super(member.name, member.email, member.roleID, member.password);
    this.name = member.name;
    this.email = member.email;
    this.roleID = member.roleID;
    this.password = member.password;
  }
}