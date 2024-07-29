/** @jojayeon 20.07.25
 * * 사용 하는 부분 예시
 * * 원하는 값 조회(단일)
 * * @param menu - 필드 선택 (객체안에 객체인 경우 점 표기법으로)
 * * @param select - 원하는 값 검색 
 */


import oneread from "./read/oneread";
import mongoserver from "./schema/mongoserver";


const OneReaduse = async (menu: string, select: string): Promise<void> => {
  try {
    await mongoserver();
    const a = await oneread(menu, select);
  } catch (err) {
    console.log("오류 발생:", err);
  } finally {
    process.exit(); 
  }
};


export default OneReaduse;