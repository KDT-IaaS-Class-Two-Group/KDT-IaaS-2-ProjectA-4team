/** @jojayeon 20.07.23
 * * 전체 조회
 */

import member from "../schema/Schema";
import { IMember } from "../schema/Schemainterface";

const allread = async (): Promise<IMember[]> => {
  try {
    const user = await member.find({}).exec();
    console.log("성공");
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export default allread;

