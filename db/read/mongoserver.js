/** @jojayeon 20.07.23
 * * 몽구DB 서버
 * * 원래 몽고 서버로 교체 해야함 
 */
const mongoose = require("mongoose");

const mongoserver = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase")
  } catch(err) {
    console.log("실패!",err);
  }
}

module.exports = mongoserver;