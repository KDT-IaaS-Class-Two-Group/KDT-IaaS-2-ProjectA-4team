/** @jojayeon 20.08.02
 * * 사용 하는 부분 예시
 * * 원하는 값 조회(단일)
 * * @param menu - 필드 선택 (객체안에 객체인 경우 점 표기법으로)
 * * @param select - 원하는 값 검색 
 * * 사용하실때 내보내기한 oneReaduse 사용해도 되고 이 함수를 가져다 사용해 됨
 */


import oneread from "./read/oneread";


const OneReaduse = async (menu: string, select: string): Promise<void> => {
  try {
    const a = await oneread(menu, select);
  } catch (err) {
    console.log("오류 발생:", err);
  } finally {
    process.exit(); 
  }
};


export default OneReaduse;