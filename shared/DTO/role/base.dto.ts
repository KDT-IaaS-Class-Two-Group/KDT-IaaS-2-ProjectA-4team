// * 기본 DTO 추상 클래스
export abstract class BaseDTO {
  protected roleID: number;
  protected roleName: string;
  protected permission: string;

  constructor(roleID: number, roleName: string, permission: string) {
    this.roleID = roleID;
    this.roleName = roleName;
    this.permission = permission;
  }

  // 공통 메서드 예시
  public toJSON(): object {
    return {
      roleID: this.roleID,
      roleName: this.roleName,
      permission: this.permission,
    };
  }
}