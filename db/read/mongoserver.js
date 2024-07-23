//몽고 서버
//이것도 몽고 서버있는거에 대체해야함
import mongoose from "mongoose";

const mongoserver = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase")
  } catch(err) {
    console.log("실패!",err);
  }
}

export default mongoserver