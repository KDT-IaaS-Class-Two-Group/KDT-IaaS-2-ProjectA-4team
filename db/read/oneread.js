/** @jojayeon 20.07.25
 * * 부분 조회
 */
const member = require("./Schema");

const allread = async (menu , select) => {
  try {
    const menuselect = { [menu]: select };;
    const user = await member.findOne(menuselect);
    console.log("성공");
    return user;
  } catch (err) {
    console.log(err);
  }
};

module.exports = allread;