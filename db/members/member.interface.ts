import IEmail from "../../shared/DTO/interfaces/Email.interface";
import IName from "../../shared/DTO/interfaces/Name.interface";
import IPassword from "../../shared/DTO/interfaces/Password.interface";
import IRoleID from "../../shared/DTO/interfaces/RoleID.interface";

/**
 * @crystal23733 24.07.22
 * * 멤버를 정의하는 인터페이스
 */
export default interface IMember extends IName, IEmail, IRoleID, IPassword{

}