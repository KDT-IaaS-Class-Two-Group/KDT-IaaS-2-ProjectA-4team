const Member = require("../shared/Member");
// const Product = require("../shared/Product");
// const Role = require("../shared/Role");
// const addExampleData = require("./addExampleData");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/rockcodersERP")
  .then(() => console.log("MongoDB is connected!"))
  .catch((error) => console.log("MongoDB connection error:", error));

// CORS 설정
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// const allowedOrigins = ["http://localhost:3000/"];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   allowedHeaders: "Content-Type,Authorization",
//   credentials: true,
// };

// app.use(cors(corsOptions));
app.use(express.json());

// 사용자 저장 및 처리
console.log("Sending request to:", "http://localhost:4000/join");
app.post("/join", async (req, res) => {
  console.log("join 접근");
  res.header("http://localhost:3000/join");
  try {
    const { memberId, name, email, password, roleID } = req.body;
    // 데이터가 잘 들어왔는지 확인하기 위해 로그 출력
    // 새로운 사용자 저장
    const member = new Member({ memberId, name, email, password, roleID });
    await member.save();
    // 새로운 사용자 저장
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("유저 저장 실패", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
