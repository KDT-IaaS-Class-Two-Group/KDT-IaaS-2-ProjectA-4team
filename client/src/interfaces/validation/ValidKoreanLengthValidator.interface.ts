interface IValidKoreanLengthValidator {
  isValidKoreanLength(
    value: string,
    minLength: number,
    maxLength: number,
  ): boolean;
}

export default IValidKoreanLengthValidator;
