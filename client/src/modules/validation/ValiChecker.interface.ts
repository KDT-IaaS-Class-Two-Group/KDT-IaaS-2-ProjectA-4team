import IEmail from "src/interfaces/email/Email.interface";
import IName from "src/interfaces/name/Name.interface";
import IPassword from "src/interfaces/password/Password.interface";

interface IValiChecker {
  checkName(value: string): boolean;

  checkPW(value: string): object;

  isEqualTo(
    targetValue: string | number,
    comparedValue: string | number,
  ): boolean;
}

export default IValiChecker;
