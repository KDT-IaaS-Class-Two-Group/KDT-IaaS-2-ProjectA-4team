/** @jojayeon 20.07.23
 * * 사용 하는 부분 예시
 * * 전체 조회
 */

const mongoserver = require("./schema/mongoserver");
const allread = require("./read/Allread");

mongoserver()
  .then(async() => {
    try {
      await allread(); 
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