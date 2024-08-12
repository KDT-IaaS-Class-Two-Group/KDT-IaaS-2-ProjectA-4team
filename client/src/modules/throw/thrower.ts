/**
 * @eonduck2 24.08.09
 * * 주어진 메시지로 오류를 발생시키는 함수입니다.
 *
 * @param {string} errMessage - 발생시킬 오류의 메시지
 * @throws {Error} 주어진 메시지를 포함한 Error 객체
 */

export default (errMessage: string | Error) => {
  if (errMessage instanceof Error) {
    throw errMessage; // Error 객체라면 그대로 던짐
  } else {
    throw new Error(errMessage); // string이라면 새로운 Error 객체 생성
  }
};
