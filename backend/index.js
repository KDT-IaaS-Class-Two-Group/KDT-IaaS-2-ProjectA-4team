const Member = require("../shared/Member");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const isEamilUnique = require("./modules/isEmailUnique");

const app = express();
const PORT = 4000;
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/rockcodersERP")
  .then(() => console.log("MongoDB is connected!"))
  .catch((error) => console.log("MongoDB connection error:", error));

// CORS 설정
const corsOptions = {
  origin: "http://localhost:3000", // 프론트엔드 서버 주소
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions)); // CORS 미들웨어 추가
app.use(bodyParser.json());
app.use(express.json());

// 사용자 저장 및 처리
console.log("Sending request to:", "http://localhost:4000/join");
app.post("/join", async (req, res) => {
  console.log("join 접근");
  res.header("http://localhost:3000/join");
  try {
    const { name, email, password } = req.body;
    // 데이터가 잘 들어왔는지 확인하기 위해 로그 출력
    console.log("Received data:", { name, email, password });

    // 필요한 모든 필드가 제공되었는지 확인
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // * 이메일 중복 여부 확인
    const emailUnique = await isEmailUnique(email);

    if (!emailUnique) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const member = new Member({ name, email, password, roleID: 1 }); // 기본 roleID를 1로 설정
    await member.save();
    console.log("데이터 저장 성공함");
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("유저 저장 실패", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
