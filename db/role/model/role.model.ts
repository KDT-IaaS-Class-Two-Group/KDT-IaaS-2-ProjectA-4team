/**
 * @crystal23733 24.07.22
 * * role model 정의
 */

import mongoose from "mongoose";
import IRole from "../Role.interface";
import roleSchema from "../schema/role.schema";

const Role = mongoose.model<IRole>("Role", roleSchema);

export default Role;