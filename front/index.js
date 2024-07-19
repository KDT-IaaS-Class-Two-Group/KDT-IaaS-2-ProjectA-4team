//프론트 서버 진입점

const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

/**
 * * 서버생성
 */
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = `./public${parsedUrl.pathname}`;
  // `/join` 경로에 대한 처리를 추가합니다.
  if (parsedUrl.pathname === "/join") {
    pathname = "./public/join.html";
  } else if (pathname === "./public/") {
    pathname = "./public/index.html";
  }

  const ext = path.parse(pathname).ext;
  const map = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
  };

  fs.exists(pathname, function (exist) {
    if (!exist) {
      res.statusCode = 404;
      res.end(`File ${pathname} not found!`);
      return;
    }

    fs.readFile(pathname, function (err, data) {
      if (err) {
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        res.setHeader("Content-type", map[ext] || "text/plain");
        res.end(data);
      }
    });
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`프론트엔드 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
