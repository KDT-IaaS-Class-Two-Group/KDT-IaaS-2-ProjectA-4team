//읽기 하는 부분 스키마불러와서 작업
//전부찾기
import memberSchema from "./Schema"

const allread = async (name) => {
  try {
    const query = name ? { name } : {};
    const user = await memberSchema.find({query});
    console.log("성공")
    return user
  } catch (err) {
    console.log(err);
  }
};

export default allread