//사용부분 
// 몽고서버랑 read부분을 가져와서 
//서버안에 성공하면 read 불러오기 

import mongoserver from "./mongoserver";
import allread from "./Allread";

mongoserver()
  .then(async() => {
    try {
      await allread("조자연");
    } catch (err) {
      console.log(err + "종료되어 성공을 의미합니다.")
    }finally {
      process.exit(); //비여있다 = 0 이다.
    }
  })
  .catch(err => {
    console.log(err + "비정상적인 종료를 의미합니다.")
    process.exit(1); // 실패했으니까 오류인 비정상적인 종료이고 위에 0은 에러로 꺼지긴 했짐나 try가 실행되면 꺼지는 것도 있기때문인것으로 보인다.
  })


  // 기존과다른점 allread("조자연")