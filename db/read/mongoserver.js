//몽고 서버
import mongoose from "mongoose";

const mongoserver = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase")
  } catch(err) {
    console.log("실패!",err);
  }
}

export default mongoserver