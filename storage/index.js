//스토리지 서버 진입점

const http = require("http");

let data = [
  { id: 1, name: "이종수" },
  { id: 2, name: "밥먹어" },
];

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`스토리지 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
