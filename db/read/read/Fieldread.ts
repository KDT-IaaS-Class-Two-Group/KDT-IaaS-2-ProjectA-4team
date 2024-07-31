/** @jojayeon 20.07.29
 * * 필드 조회
 * * @param selectname : 필드 이름 
 */
import member from "../schema/Schema";
import { IMember } from "../schema/Schemainterface";


const fieldread = async (selectname : string):Promise<IMember[]> => {//원하는 필드
  try {
    const query = { [selectname] : { $exists: true } };
    const projection = { [selectname]: 1, _id: 0 }; 
    const user = await member.find(query,projection).exec();
    console.log("성공");
    return user;
  } catch (err) {
    console.log(err);
    throw err
  }
};

export default fieldread
