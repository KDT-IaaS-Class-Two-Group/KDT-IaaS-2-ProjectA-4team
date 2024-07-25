import IEmail from "src/interfaces/Email.interface";
import IName from "src/interfaces/Name.interface";
import IPassword from "src/interfaces/Password.interface";

interface IValiChecker {
  checkName(value: string): boolean;

  checkEmail(value: string): boolean;

  checkPW(value: string): boolean;

  isEqualTo(
    targetValue: string | number,
    comparedValue: string | number
  ): boolean;
}

export default IValiChecker;
