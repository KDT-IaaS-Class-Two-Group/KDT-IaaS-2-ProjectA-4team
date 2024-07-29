/** @jojayeon 20.07.23
 * * 전체 조회
 */

const member = require("../schema/Schema");

const allread = async () => {
  try {
    const user = await member.find({}).exec();
    console.log("성공");
    return user;
  } catch (err) {
    console.log(err);
  }
};

module.exports = allread;