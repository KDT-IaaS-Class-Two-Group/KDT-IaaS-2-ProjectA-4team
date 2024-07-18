const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  memberId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roleID: { type: Number, required: true },
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
