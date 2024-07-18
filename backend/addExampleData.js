const Member = require("../shared/Member");
const Product = require("../shared/Product");
const Role = require("../shared/Role");

const addExampleData = () => {
  try {
    addMemberData();
    addRoleData();
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
const addProductData = async () => {
  const basicBun = new Product({
    productID: 1,
    productName: "기본 빵",
    unitPrice: 1000,
    quantity: 200,
    restockDate: new Date("2024-07-15"),
    expirationDate: new Date("2024-08-13"),
  });
  const chickenPatty = new Product({
    productID: 2,
    productName: "치킨 패티",
    unitPrice: 4000,
    quantity: 120,
    restockDate: new Date("2024-07-16"),
    expirationDate: new Date("2024-10-09"),
  });
  const coke = new Product({
    productID: 3,
    productName: "콜라",
    unitPrice: 1000,
    quantity: 98,
    restockDate: new Date("2024-06-19"),
    expirationDate: new Date("2024-11-21"),
  });

  await basicBun.save();
  await chickenPatty.save();
  await coke.save();
};

module.exports = addExampleData;
