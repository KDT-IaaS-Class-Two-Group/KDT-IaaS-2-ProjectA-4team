/** @jojayeon 20.08.02
 * * 사용 하는 부분 예시
 * * 전체 조회
 * * 사용하실때 내보내기한 AllReaduse를 사용해도 되고 이 함수를 가져다 사용해 됨
 */


import allread from "./read/Allread";

const AllReaduse = async () => {
  try {
    const a = await allread();
  } catch (err) {
    console.log("오류 발생:", err);
  } finally {
    process.exit();
  }
};

export default AllReaduse;