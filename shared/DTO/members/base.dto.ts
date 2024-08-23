/**
 * * 기본 DTO 추상 클래스
 * @crystal23733 24.07.22
 * @description 데이터 전송 객체(DTO)의 기본 클래스로, 공통 속성과 메서드를 정의합니다.
 */
export abstract class BaseDTO {
  protected name: string;
  protected email: string;
  protected roleID: number;
  protected password: string;

  /**
   * @param name - 사용자의 이름
   * @param email - 사용자의 이메일
   * @param roleID - 사용자의 역할 ID
   * @param password - 사용자의 비밀번호
   */
  constructor(name: string, email: string, roleID: number, password: string) {
    this.name = name;
    this.email = email;
    this.roleID = roleID;
    this.password = password;
  }

  /**
   * * 공통 메서드 예시
   * @crystal23733 24.07.22
   * @description DTO를 JSON 객체로 변환합니다.
   * @returns JSON 객체
   */
  public toJSON(): object {
    return {
      name: this.name,
      email: this.email,
      roleID: this.roleID,
      password: this.password,
    };
  }
}