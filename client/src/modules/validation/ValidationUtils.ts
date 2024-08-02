import { boolean } from "zod";
import IValidationUtils from "./ValidationUtils.interface";

abstract class AbstractedValidationUtils implements IValidationUtils {
  public abstract hasWhitespace(value: string): boolean;

  public abstract isKorean(value: string): boolean;

  public abstract isEnglish(value: string): boolean;

  public abstract isValidKoreanLength(
    value: string,
    minLength: number,
    maxLength: number,
  ): boolean;

  public abstract isValidEnglishLength(value: string, length: number): boolean;
}

class ValidationUtilsForStatic implements AbstractedValidationUtils {
  public hasWhitespace = (value: string): boolean => false;

  public isKorean = (value: string): boolean => false;

  public isEnglish = (value: string): boolean => false;

  public isValidKoreanLength = (
    value: string,
    minLength: number,
    maxLength: number,
  ): boolean => false;

  public isValidEnglishLength = (value: string, length: number): boolean =>
    false;
}

class ImplementedValidationUtils extends ValidationUtilsForStatic {
  public static hasWhitespace(value: string): boolean {
    return /\s/.test(value);
  }

  // 한글 검사를 수행합니다.
  public static isKorean(value: string): boolean {
    return /^[가-힣]+$/.test(value);
  }

  // 영어 검사를 수행합니다.
  public static isEnglish(value: string): boolean {
    return /^[a-zA-Z]+$/.test(value);
  }

  // 한글 길이 유효성 검사를 수행합니다.
  public static isValidKoreanLength(
    value: string,
    minLength: number,
    maxLength: number,
  ): boolean {
    return value.length >= minLength && value.length <= maxLength;
  }

  // 영어 길이 유효성 검사를 수행합니다.
  public static isValidEnglishLength(value: string, length: number): boolean {
    return value.length >= length;
  }
}

class ValidationUtils extends ImplementedValidationUtils {
  constructor() {
    if (new.target === ValidationUtils) {
      throw new Error("직접 인스턴스화 불가능");
    }
    super();
  }
}

export default ValidationUtils;
