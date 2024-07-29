/** @jojayeon 20.07.25
 * * 사용 하는 부분 예시
 * * 원하는 값 조회(단일)
 */

const mongoserver = require("./schema/mongoserver");
const oneread = require("./read/oneread");


const run = async (menu, select) => {
  try {
    await mongoserver();
    const a = await oneread(menu, select);
    console.log(a)
  } catch (err) {
    console.log("오류 발생:", err);
  } finally {
    process.exit(); // 비동기 처리가 완료된 후 종료
  }
};

run('name', '조자연');