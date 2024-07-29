/** @jojayeon 20.07.23
 * * 사용 하는 부분
 * * 전체 조회
 */


import allread from "./read/Allread";
import mongoserver from "./schema/mongoserver";

const AllReaduse = async () => {
  try {
    await mongoserver();
    const a = await allread();
  } catch (err) {
    console.log("오류 발생:", err);
  } finally {
    process.exit();
  }
};

export default AllReaduse;