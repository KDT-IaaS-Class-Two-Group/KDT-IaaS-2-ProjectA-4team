const Member = require("../../shared/Member");

/**
 * @moonhr 24.07.19
 * * db에 같은 이메일이 있는지 확인하는 함수
 * @param {*} email
 * @returns boolean
 */
module.exports = async (email) => {
  try {
    const existingMember = await Member.findOne({ email: email });
    return !existingMember; // 존재하지 않으면 true, 존재하면 false
  } catch (error) {
    console.error("Error checking email uniqueness:", error);
    throw new Error("Server error");
  }
};
