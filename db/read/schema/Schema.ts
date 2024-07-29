/** @jojayeon 20.07.23
 * * 몽고 스키마 , 모델 
 * * 원래 스키마에 연결 필요
 */
import mongoose, { Schema } from "mongoose";
import { IMember } from "./Schemainterface";

const memberSchema: Schema<IMember> = new Schema({
  memberID: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  roleID: { type: Number, required: true }
});

const member = mongoose.model<IMember>("member", memberSchema )

export default member