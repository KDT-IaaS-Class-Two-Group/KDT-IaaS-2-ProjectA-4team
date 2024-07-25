import IRoleID from "../../shared/DTO/members/interface/RoleID.interface";
import IPermission from "../../shared/DTO/role/interface/Permission.interface";
import IRoleName from "../../shared/DTO/role/interface/RoleName.interface";

/**
 * @crystal23733 24.07.22
 * * role interface 정의
 */
export default interface IRole extends IRoleID, IRoleName, IPermission{
}