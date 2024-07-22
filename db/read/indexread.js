//읽기 하는 부분 스키마불러와서 작업
import memberSchema from "./Schema"

const allread = async (name) => {
  try {
    const user = await memberSchema.findone({name}); //find 비여놓으면 모두 불러오기 
    console.log("성공")
    return user
  } catch (err) {
    console.log(err);
  }
};

export default allread

//원하는 것 찾기
//기존 read랑 다른 점은 find -> findone 으로 교체하고 매개변수로 어떤 것을 가져올지 정해준다.

//name에 있는 것 모두 찾기
//find로 쓰고 indexreaduse에 매개변수 넣지 않는다.