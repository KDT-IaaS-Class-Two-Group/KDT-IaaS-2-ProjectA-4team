/** @jojayeon 2024.07.29
 * * 스키마 인테페이스
 */
import { Document} from "mongoose";

export interface IMember extends Document {
  memberID: string;
  name: string;
  email: string;
  password: string;
  roleID: number;
}

