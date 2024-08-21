/**
 * @moonhr 24.07.18
 * * password 검사
 * @param {*} password
 * @returns boolean
 */
export default (password) => {
  const noSpacesRegex = /^\S*$/; // 띄어쓰기가 없는지 확인
  const validCharactersRegex = /^[a-zA-Z0-9]*$/; // 영어 소문자, 대문자, 숫자만 포함하는지 확인
  const validLengthRegex = /^.{8,25}$/; // 길이가 8자 이상 25자 이하인지 확인

  let errorMessage = "";

  if (!noSpacesRegex.test(password)) {
    errorMessage = "띄어쓰기가 포함되어 있습니다.";
  }

  if (!validCharactersRegex.test(password)) {
    errorMessage = "영어 소문자, 대문자, 숫자 이외의 문자가 포함되어 있습니다.";
  }

  if (!validLengthRegex.test(password)) {
    errorMessage = "비밀번호의 길이가 8자 이상 25자 이하여야 합니다.";
  }

  if (errorMessage) {
    return { valid: false, message: errorMessage };
  } else {
    return true;
  }
};
