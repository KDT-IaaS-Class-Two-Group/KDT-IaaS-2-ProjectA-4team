

//프론트 서버 진입점
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
/**
 * * 서버생성
 */
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === "/") {
    const indexPath = path.join(__dirname, "public", "index.html");
    fs.readFile(indexPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (parsedUrl.pathname === "/api/data") {
    // API 엔드포인트 처리
    const responseData = { message: "데이터를 가져왔습니다." };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(responseData));
  } else if (req.url === "/end" && req.method === "GET") {
    // console.log(parsedUrl)
    
    res.writeHead(200, { "Contnt-Type": "application/json" });
    res.end(console.log("tset"));
  } else {
    // 에러처리
    res.writeHead(404);
    res.end("Not Found");
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`프론트엔드 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});