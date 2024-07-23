/** @jojayeon 20.07.23
 * * 사용 하는 부분도 만들어본 것
 * * 지금 은 비여있음 -> 전체를 가져오겠다.
 */

const mongoserver = require("./mongoserver");
const allread = require("./Allread");

mongoserver()
  .then(async() => {
    try {
      await allread(); 
      //"name"하면 불러와지고 비우면 전체 불러오기
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