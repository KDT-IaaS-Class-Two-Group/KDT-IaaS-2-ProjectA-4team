interface IValidationUtils {
  hasWhitespace(value: string): boolean;
  isKorean(value: string): boolean;
  isEnglish(value: string): boolean;
  isValidKoreanLength(value: string): boolean;
  isValidEnglishLength(value: string): boolean;
}
