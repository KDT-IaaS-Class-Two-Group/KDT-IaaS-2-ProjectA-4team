/**
 * @crystal23733 24.07.22
 * * role schema
 */

import { Schema } from "mongoose";
import IRole from "../Role.interface";

const roleSchema:Schema<IRole> = new Schema({
  roleID: { type: Number, require: true, unique: true },
  roleName: { type: String, require: true },
  permission: { type: String, require: true },
})

export default roleSchema;