/**
 * @yuxincxoi 24.07.18
 * * 회원정보 Collection 생성
 */

const mongoose = require("mongoose");

// * Member 스키마 정의
const memberSchema = new mongoose.Schema({
  memberId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roleID: { type: Number, required: true },
});

// * Member 모델 생성
const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
