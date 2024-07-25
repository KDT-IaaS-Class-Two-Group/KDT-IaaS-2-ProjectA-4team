/** @jojayeon 20.07.23
 * * 사용 하는 부분도 만들어본 것
 * * 전체 조회
 */

const mongoserver = require("./mongoserver");
const allread = require("./Allread");

mongoserver()
  .then(async(menu , select) => {
    try {
      await allread(menu , select); 
    } catch (err) {
      console.log(err + "문서 조회 할떄 오류임")
    }finally {
      process.exit(); 
    }
  })
  .catch(err => {
    console.log(err + "오류 - 몽고 연결에 오류")
    process.exit(1); 
  })