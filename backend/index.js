//백엔드 서버 진입점

const http = require("http");

let data = [
  { id: 1, name: "최유진" },
  { id: 2, name: "커피먹어" },
];

const server = http.createServer((req, res) => {
  // CORS 설정
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // 요청을 허용할 출처
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 허용할 HTTP 메서드
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // 허용할 헤더

  // OPTIONS 요청 처리 (프리플라이트 요청)
  if (req.method === 'OPTIONS') {
    res.writeHead(204); // No Content
    res.end();
    return;
  }

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`백엔드 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
