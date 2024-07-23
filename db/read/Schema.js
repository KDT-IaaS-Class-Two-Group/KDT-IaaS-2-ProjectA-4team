/** @jojayeon 20.07.23
 * * 몽고 스키마 , 모델 
 * * 원래 스키마에 연결 필요
 */
const mongoose = require("mongoose");

const memberSchema  = new mongoose.Schema({
  memberID : String,
  name : String,
  email : String,
  password : String,
  roleID : Number
})

const member = mongoose.model("member", memberSchema )

module.exports = member;