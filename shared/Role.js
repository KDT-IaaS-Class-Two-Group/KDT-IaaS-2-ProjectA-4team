/**
 * @yuxincxoi 24.07.18
 * * 권한 Collection 생성
 */

const mongoose = require("mongoose");

// * Role 스키마 정의
const roleSchema = new mongoose.Schema({
  roleID: { type: Number, require: true, unique: true },
  roleName: { type: String, require: true },
  permission: { type: String, require: true },
});

// * Role 모델 생성
const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
