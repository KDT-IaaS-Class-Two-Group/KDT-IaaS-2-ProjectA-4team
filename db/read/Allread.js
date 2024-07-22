//읽기 하는 부분 스키마불러와서 작업
import memberSchema from "./Schema"

const allread = async () => {
  try {
    const user = await memberSchema.find({}); //find 비여놓으면 모두 불러오기 
    console.log("성공")
    return user
  } catch (err) {
    console.log(err);
  }
};

export default allread