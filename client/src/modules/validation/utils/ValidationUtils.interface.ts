import IEnglishValidator from "src/interfaces/validation/language/eng/EnglishValidator.interface";
import IKoreanValidator from "src/interfaces/validation/language/kor/KoreanValidator.interface";
import IValidEnglishLengthValidator from "src/interfaces/validation/language/eng/length/ValidEnglishLengthValidator.interface";
import IValidKoreanLengthValidator from "src/interfaces/validation/language/kor/length/ValidKoreanLengthValidator.interface";
import IWhitespaceValidator from "src/interfaces/validation/space/WhitespaceValidator.interface";

interface IValidationUtils
  extends IWhitespaceValidator,
    IKoreanValidator,
    IEnglishValidator,
    IValidKoreanLengthValidator,
    IValidEnglishLengthValidator {}

export default IValidationUtils;
