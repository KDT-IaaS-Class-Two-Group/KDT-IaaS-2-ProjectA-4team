import { Schema } from "mongoose";
import IMember from "../member.interface";

// * Member 스키마 정의
const memberSchema: Schema<IMember> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roleID: { type: Number, default: 0 },
});

export default memberSchema;
