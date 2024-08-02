import IEnglishValidator from "src/interfaces/validation/EnglishValidator.interface";
import IKoreanValidator from "src/interfaces/validation/KoreanValidator.interface";
import IValidEnglishLengthValidator from "src/interfaces/validation/ValidEnglishLengthValidator.interface";
import IValidKoreanLengthValidator from "src/interfaces/validation/ValidKoreanLengthValidator.interface";
import IWhitespaceValidator from "src/interfaces/validation/WhitespaceValidator.interface";

interface IValidationUtils
  extends IWhitespaceValidator,
    IKoreanValidator,
    IEnglishValidator,
    IValidKoreanLengthValidator,
    IValidEnglishLengthValidator {}

export default IValidationUtils;
