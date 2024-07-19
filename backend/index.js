const Member = require("../shared/Member");
const addExampleData = require("./addExampleData");
const http = require("http");

/*
  * @eonduck2 24.07.19
  ! 임의의 데이터를 전달받았다는 전제 하에 작업 진행
  todo, 기능 별 모듈화
  todo, 동적인 컬렉션 지정
 */

let data = { email: "js@kirby.com", password: "js123" };

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/rockcodersERP")
  .then(() => console.log("MongoDB is connected !"))
  .catch((error) => console.log(error));

async function findUserByEmailAndPassword(email, password) {
  try {
    // 데이터베이스에서 이메일과 비밀번호로 사용자 검색
    const user = await Member.findOne({
      email: email,
      password: password,
    }).exec();
    // 사용자가 존재하면 true, 아니면 false 반환
    return user !== null;
  } catch (error) {
    console.error("Error finding user by email and password:", error);
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
  try {
    server.listen(PORT, () => {
      console.log(`백엔드 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
    });

    // 데이터 저장 후 사용자 검색
    const userExists = await findUserByEmailAndPassword(
      data.email,
      data.password
    );
    console.log(`존재 여부:`, userExists);
  } catch (error) {
    throw new Error("Error starting server:", error);
  }
}

startServer();
