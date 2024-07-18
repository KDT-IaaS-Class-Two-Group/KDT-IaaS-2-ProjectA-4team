const Member = require("../shared/Member");
const Role = require("../shared/Role");

const addExampleData = () => {
  try {
    addMemberData();
  } catch (err) {
    console.log(err);
  }
};

const addMemberData = async () => {
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
};
const addRoleData = async () => {
  const admin = new Role({
    roleID: 1,
    roleName: "관리자",
    permission: "checkInAdminPage",
  });
  const user = new Role({
    roleID: 2,
    roleName: "사용자",
    permission: "checkInUserPage",
  });

  await admin.save();
  await user.save();
};

module.exports = addExampleData;
