//db서버 진입점

let data = [
  { id: 1, name: "조자연" },
  { id: 2, name: "공부해" },
];

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else if (req.url === "/api/data" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const newData = JSON.parse(body);
      data.push(newData);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "데이터가 추가되었습니다." }));
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  console.log(
    `데이터베이스 서버가 http://localhost:${PORT} 에서 실행 중입니다.`
  );
});
