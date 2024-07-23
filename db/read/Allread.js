/** @jojayeon 20.07.23
 * * 스키마 가져와서
 * * 전체를 찾을 것인지 
 * * @param name - 비여 있으면 전체, 원하는 항목 먹으면 찾음
 */
const member = require("./Schema");

const allread = async (name) => {
  try {
    const query = name ? { name } : {};
    const user = await member.find({query});
    console.log("성공");
    return user;
  } catch (err) {
    console.log(err);
  }
};

module.exports = allread;