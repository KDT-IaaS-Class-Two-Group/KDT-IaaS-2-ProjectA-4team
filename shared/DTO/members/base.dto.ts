// * 기본 DTO 추상 클래스
export abstract class BaseDTO {
  protected name: string;
  protected email: string;
  protected roleID: number;
  protected password: string;

  constructor(name: string, email: string, roleID: number, password: string) {
    this.name = name;
    this.email = email;
    this.roleID = roleID;
    this.password = password;
  }

  // 공통 메서드 예시
  public toJSON(): object {
    return {
      name: this.name,
      email: this.email,
      roleID: this.roleID,
      password: this.password,
    };
  }
}