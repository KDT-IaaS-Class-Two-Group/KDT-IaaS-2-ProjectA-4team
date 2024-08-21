/**
 * @moonhr 24.07.18
 * * 이메일 검사
 * @param {*} email
 * @returns boolean
 */
export default (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    return { valid: false, message: "유효하지 않은 이메일 주소입니다." };
  } else {
    return true;
  }
};
