import IEmail from "../../shared/DTO/members/interface/Email.interface";
import IName from "../../shared/DTO/members/interface/Name.interface";
import IPassword from "../../shared/DTO/members/interface/Password.interface";
import IRoleID from "../../shared/DTO/members/interface/RoleID.interface";

/**
 * @crystal23733 24.07.22
 * * 멤버를 정의하는 인터페이스
 */
export default interface IMember extends IName, IEmail, IRoleID, IPassword{

}