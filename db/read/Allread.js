/** @jojayeon 20.07.23
 * * 전체 조회
 */
const member = require("./Schema");

const allread = async () => {
  try {
    const user = await member.find({});
    console.log("성공");
    return user;
  } catch (err) {
    console.log(err);
  }
};

module.exports = allread;