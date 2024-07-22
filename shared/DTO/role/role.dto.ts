import IRole from '../../../db/role/Role.interface';
import { BaseDTO } from './base.dto';

// * roleDTO 클래스
export class roleDTO extends BaseDTO {
  public roleID: number;
  public roleName: string;
  public permission: string;

  constructor(role: IRole) {
    super(role.roleID, role.roleName, role.permission);
    this.roleID = role.roleID;
    this.roleName = role.roleName;
    this.permission = role.permission;
  }
}