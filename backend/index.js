//백엔드 서버 진입점

const http = require("http");

let data = [
  { id: 1, name: "최유진" },
  { id: 2, name: "커피먹어" },
];

const server = http.createServer((req, res) => {
  if (req.url === "/endpoint" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`백엔드 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
