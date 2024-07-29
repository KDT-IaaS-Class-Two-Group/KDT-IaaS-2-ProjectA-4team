/** @jojayeon 20.07.23
 * * 몽구DB 서버
 * * 원래 몽고 서버로 교체 해야함 
 */
import mongoose from "mongoose";

const mongoserver = async (): Promise<void> => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase")
  } catch(err) {
    console.log("실패!",err);
  }
}


export default mongoserver