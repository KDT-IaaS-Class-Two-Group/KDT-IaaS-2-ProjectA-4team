import IEmail from "src/interfaces/email/Email.interface";
import IName from "src/interfaces/name/Name.interface";

export default interface IMemberInfo extends IName, IEmail {
  _id: string;
  roleID: number;
}
