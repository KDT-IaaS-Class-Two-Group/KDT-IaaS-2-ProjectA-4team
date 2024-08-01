/** @jojayeon 20.07.29
 * * 사용 하는 부분 예시
 * * 필드 조회
 * * @param selectname - 원하는 필드 조회
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