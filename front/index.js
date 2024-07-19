//프론트 서버 진입점
const path = require("path");
const express = require("express");
// const cors = require("cors");

const app = express();

// app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.get("/join", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "join.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`프론트엔드 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
