const http = require("http");

/*
  * @eonduck2 24.07.19
  ! 정적인 서버 스켈레톤임을 알림
  todo, 기능 별 모듈화
  todo, 동적인 컬렉션 지정
 */

let data = [{ email: "js@kirby.com", password: "js123" }];

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/rockcodersERP")
  .then(() => console.log("MongoDB is connected !"))
  .catch((error) => console.log(error));

// 스키마 정의
const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
});

// 모델 생성
const User = mongoose.model("User", userSchema);

async function saveInitialData() {
  try {
    await User.deleteMany({}); // 기존 데이터 삭제
    const savedUsers = await User.insertMany(data);
    console.log("Initial data saved:", savedUsers);
    return savedUsers;
  } catch (error) {
    console.error("Error saving initial data:", error);
    throw error;
  }
}

// 사용자 이름으로 검색하는 함수
async function findUserByName(value) {
  try {
    const user = await User.findOne({ name: value });
    return user !== null;
  } catch (error) {
    console.error("Error finding user by name:", error);
    throw error;
  }
}

const server = http.createServer((req, res) => {
  // CORS 헤더 추가
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  if (req.url === "/endpoint" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

const PORT = 4000;

async function startServer() {
  const dummyName = "최유진";
  try {
    await saveInitialData();
    server.listen(PORT, () => {
      console.log(`백엔드 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
    });

    // 데이터 저장 후 사용자 검색
    const userExists = await findUserByName(dummyName);
    console.log(`User 컬렉션에 ${dummyName} 존재 여부:`, userExists);
  } catch (error) {
    throw new Error("Error starting server:", error);
  }
}

startServer();
