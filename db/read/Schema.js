//스키마
//원래 있는 스키마로 대체 해야함
import mongoose from "mongoose";

const memberSchema  = new mongoose.Schema({
  memberID : String,
  name : String,
  email : String,
  password : String,
  roleID : Number
})

const member = mongoose.model("member", memberSchema )

export default member;