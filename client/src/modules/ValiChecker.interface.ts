import IEmail from "src/interfaces/Email.interface";
import IName from "src/interfaces/Name.interface";
import IPassword from "src/interfaces/Password.interface";

interface IValiChecker extends IName, IEmail, IPassword {
  checkName(value: string): boolean;

  checkEmail(value: string): boolean;

  checkPW(value: string): boolean;

  isEqualTo(value: string | number, secondValue: string | number): boolean;
}

export default IValiChecker;
