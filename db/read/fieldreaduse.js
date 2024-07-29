/** @jojayeon 20.07.29
 * * 사용 하는 부분 예시
 * * 필드 조회
 */

const mongoserver = require("./schema/mongoserver");
const fieldread = require("./read/Fieldread");

  const run = async (selectname) => {
    try {
      await mongoserver();
      const a = await fieldread(selectname);
      console.log(a)
    } catch (err) {
      console.log("오류 발생:", err);
    } finally {
      process.exit();
    }
  };
  
  run('name');