import { Flag } from "lucide-react";
import IValiChecker from "./ValiChecker.interface";

abstract class AbstractedValiChecker implements IValiChecker {
  public abstract checkName(value: string): boolean;

  public abstract checkEmail(value: string): boolean;

  public abstract checkPW(value: string): boolean;

  public abstract isEqualTo(
    value: string | number,
    secondValue: string | number
  ): boolean;
}

class implementedValiChecker extends AbstractedValiChecker {
  public static checkName(value: string): boolean {
    // 띄어쓰기 금지
    if (/\s/.test(value)) {
      return false;
    }

    // 한글 또는 영어만 가능, 숫자 불가능, 혼용 불가능
    const isKorean = /^[가-힣]+$/.test(value);
    const isEnglish = /^[a-zA-Z]+$/.test(value);

    if (!isKorean && !isEnglish) {
      return false;
    }

    // 한글은 2글자 이상 8글자 이하
    if (isKorean && (value.length < 2 || value.length > 8)) {
      return false;
    }

    // 영어는 3글자 이상
    if (isEnglish && value.length < 3) {
      return false;
    }

    // 모든 조건을 만족하는 경우 유효성 검사 통과
    return true;
  }

  public static checkEmail(value: string): boolean {}

  public static checkPW(value: string): boolean {}

  public static isEqualTo(
    value: string | number,
    secondValue: string | number
  ): boolean {}
}
