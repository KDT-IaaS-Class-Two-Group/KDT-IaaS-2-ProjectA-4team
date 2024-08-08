import ValidationResult from "src/types/Validate.type";

/**
 * @moonhr 24.07.18
 * * 이름 검사
 * @param {*} name
 * @returns boolean
 */
export default (name: string): ValidationResult => {
  // 띄어쓰기 금지
  if (/\s/.test(name)) {
    return { valid: false, message: "띄어쓰기는 사용할 수 없습니다." };
  }

  // 한글 또는 영어만 가능, 숫자 불가능, 혼용 불가능
  const isKorean = /^[가-힣]+$/.test(name);
  const isEnglish = /^[a-zA-Z]+$/.test(name);

  if (!isKorean && !isEnglish) {
    return { valid: false, message: "한글 또는 영어만 입력 가능합니다." };
  }

  // 한글은 2글자 이상 8글자 이하
  if (isKorean && (name.length < 2 || name.length > 8)) {
    return {
      valid: false,
      message: "한글 이름은 2글자 이상 8글자 이하로 입력해야 합니다.",
    };
  }

  // 영어는 3글자 이상
  if (isEnglish && name.length < 3) {
    return { valid: false, message: "영어 이름은 3글자 이상 입력해야 합니다." };
  }

  // 모든 조건을 만족하는 경우 유효성 검사 통과
  return true;
};
