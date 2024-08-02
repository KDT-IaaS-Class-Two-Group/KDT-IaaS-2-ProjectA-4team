/** @jojayeon 20.08.02
 * * 사용 하는 부분 예시
 * * 필드 조회
 * * @param selectname - 원하는 필드 조회
 * * 사용하실때 내보내기한 fieldReaduse 사용해도 되고 이 함수를 가져다 사용해 됨
 */


import fieldread from "./read/Fieldread";


const fieldReaduse = async (selectname: string):Promise<void> => {
  try {
    const a = await fieldread(selectname);
  } catch (err) {
    console.log("오류 발생:", err);
  } finally {
    process.exit();
  }
};
  
export default fieldReaduse;