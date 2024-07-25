class ValidationUtils {
  // 띄어쓰기 검사를 수행합니다.
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
  public static isValidKoreanLength(value: string): boolean {
    return value.length >= 2 && value.length <= 8;
  }

  // 영어 길이 유효성 검사를 수행합니다.
  public static isValidEnglishLength(value: string): boolean {
    return value.length >= 3;
  }
}
