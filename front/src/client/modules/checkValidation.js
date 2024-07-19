/**
 * @eonduck2 24.07.18
 * * 정규식을 통해 특정 값을 평가
 * @param { string } regEx 등록할 정규식
 * @param { string } value 등록된 정규식을 통해 검증될 값
 * @returns { boolean } 검증 결과에 따른 불리언 값
 */
export default (regEx, value) => new RegExp(regEx, "g").test(value);
