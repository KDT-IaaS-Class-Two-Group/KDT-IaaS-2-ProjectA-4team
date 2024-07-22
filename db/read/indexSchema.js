//스키마
import mongoose from "mongoose";

const member = new mongoose.Schema({
  memberID : String,
  name : String,
  email : String,
  password : String,
  roleID : Number
})


member.index({ name: 1 });

const memberSchema = mongoose.model("member", member)

export default memberSchema;


//기존과 다른 점 member.index({ name: 1 }); 추가