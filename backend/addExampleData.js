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
    const member2 = new Member({
      memberId: 2,
      name: "이종수",
      email: "js@kirby.com",
      password: "js123",
      roleID: 2,
    });

    await member1.save();
    await member2.save();
  } catch (err) {
    console.log(err);
  }
};

module.exports = addExampleData;
