const Member = require("../shared/Member");

const addExampleData = async () => {
  try {
    const member1 = new Member({
      memberId: 1,
      name: "유호영",
      email: "hy@merge.com",
      password: "hy123",
      roleID: 1,
    });

    await member1.save();
  } catch (err) {
    console.log(err);
  }
};

module.exports = addExampleData;
