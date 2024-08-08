/**
 * @yuxincxoi 24.07.18
 * * 회원정보 Collection 생성
 */

import mongoose from "mongoose";
// const autoIncrement = require("mongoose-auto-increment-plugin");

// // Auto-increment 플러그인 초기화
// autoIncrement.initialize(connection);

// // * 플러그인 적용 memberId가 인덱스로 자동 생성
// memberSchema.plugin(autoIncrement.plugin, {
//   model: "Member",
//   field: "memberId",
//   startAt: 1,
//   incrementBy: 1,
// });

// * Member 스키마 정의
const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roleID: { type: Number, required: true },
});

// * Member 모델 생성
const Member = mongoose.model("Member", memberSchema);

export default Member;
