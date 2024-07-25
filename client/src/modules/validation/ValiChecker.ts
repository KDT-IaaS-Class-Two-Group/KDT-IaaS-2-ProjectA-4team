import IValiChecker from "./ValiChecker.interface";
import ValidationUtils from "./ValidationUtils";

abstract class AbstractedValiChecker implements IValiChecker {
  public abstract checkName(value: string): boolean;

  public abstract checkPW(value: string): object;

  public abstract isEqualTo(
    targetValue: string | number,
    comparedValue: string | number
  ): boolean;
}

class ValiCheckerForStatic extends AbstractedValiChecker {
  public checkName = (value: string): boolean => false;

  public checkPW = (value: string): object => Object;

  public isEqualTo = (
    value: string | number,
    secondValue: string | number
  ): boolean => false;
}

class implementedValiChecker extends ValiCheckerForStatic {
  public static checkName(value: string): boolean {
    return (
      !ValidationUtils.hasWhitespace(value) &&
      (ValidationUtils.isKorean(value)
        ? ValidationUtils.isValidKoreanLength(value, 2, 8)
        : !ValidationUtils.isEnglish(value) ||
          ValidationUtils.isValidEnglishLength(value, 3))
    );
  }

  public static checkPW(value: string): object {
    const noSpacesRegex = /^\S*$/; // 띄어쓰기가 없는지 확인
    const validCharactersRegex = /^[a-zA-Z0-9]*$/; // 영어 소문자, 대문자, 숫자만 포함하는지 확인
    const validLengthRegex = /^.{8,25}$/; // 길이가 8자 이상 25자 이하인지 확인

    let errorMessage: string | undefined;

    if (!noSpacesRegex.test(value)) {
      errorMessage = "띄어쓰기가 포함되어 있습니다.";
    }

    if (!validCharactersRegex.test(value)) {
      errorMessage =
        "영어 소문자, 대문자, 숫자 이외의 문자가 포함되어 있습니다.";
    }

    if (!validLengthRegex.test(value)) {
      errorMessage = "비밀번호의 길이가 8자 이상 25자 이하여야 합니다.";
    }

    return errorMessage
      ? { valid: false, message: errorMessage }
      : { valid: true };
  }

  public static isEqualTo = (
    targetValue: string | number,
    comparedValue: string | number
  ): boolean => targetValue === comparedValue;
}

class ValiChecker extends implementedValiChecker {
  constructor() {
    if (new.target === ValiChecker) {
      throw new Error("직접 인스턴스화 불가능");
    }
    super();
  }
}

export default ValiChecker;
