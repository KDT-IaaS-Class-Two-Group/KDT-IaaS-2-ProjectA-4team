/** @jojayeon 20.07.25
 * * 부분 조회
 * * @param menu : 필드 이름
 * * @param select : 필드 안에 검색 단어 
 */

const member = require("../schema/Schema");

const oneread = async (menu:string , selectname:string):Promise<void> => {
  try {
    const menuselect = { [menu]: selectname };
    const user = await member.findOne(menuselect).select(menu).exec();
    console.log("성공");
    return user[menu];
  } catch (err) {
    console.log(err);
  }
};

export default oneread;

