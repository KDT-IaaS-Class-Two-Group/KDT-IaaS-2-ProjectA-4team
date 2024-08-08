import ValidationResult from "src/types/Validate.type";

/**
 * @moonhr 24.07.18
 * * 비밀번호 확인 검사
 * @param {*} password
 * @param {*} passwordCheck
 * @returns boolean
 */
export default (password: string, passwordCheck: string): ValidationResult => {
  if (password === passwordCheck) {
    return true;
  } else {
    return { valid: false, message: "비밀번호가 일치하지 않습니다." };
  }
};
