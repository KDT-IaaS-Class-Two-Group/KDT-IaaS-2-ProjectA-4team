/**
 * @eonduck2 24.07.18
 * * 입력된 값과 DB에서의 유저 아이디의 일치를 확인
 * @param { string } value 유저의 입력값
 * @param { string } userIdFromDB DB에서 전달받은 유저의 ID
 * @returns { boolean } 비교값에 관한 불리언 값
 */
export default (value, userIdFromDB) => value === userIdFromDB;
