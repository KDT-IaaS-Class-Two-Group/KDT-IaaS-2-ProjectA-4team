// * 기본 DTO 추상 클래스
export abstract class BaseDTO {
  protected name: string;
  protected email: string;
  protected roleID: number;

  constructor(name: string, email: string, roleID: number) {
    this.name = name;
    this.email = email;
    this.roleID = roleID;
  }

  // 공통 메서드 예시
  public toJSON(): object {
    return {
      name: this.name,
      email: this.email,
      roleID: this.roleID,
    };
  }
}