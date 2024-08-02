import IEmail from "src/interfaces/Email.interface";
import IName from "src/interfaces/Name.interface";

export default interface IMemberInfo extends IName, IEmail {
  _id: string;
  roleID: number;
}
