const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  roleID: { type: Number, require: true, unique: true },
  roleName: { type: String, require: true },
  permission: { type: String, require: true },
});
