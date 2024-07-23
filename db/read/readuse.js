//사용부분 
// 몽고서버랑 read부분을 가져와서 
//서버안에 성공하면 read 불러오기 

import mongoserver from "./mongoserver";
import allread from "./Allread";

mongoserver()
  .then(async() => {
    try {
      await allread(); //"name"하면 불러와지고 비우면 전체 불러오기
    } catch (err) {
      console.log(err + "")
    }finally {
      process.exit(); //
    }
  })
  .catch(err => {
    console.log(err + "")
    process.exit(1); //
  })