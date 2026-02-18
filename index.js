const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(
    "<h1>Assalomu alaykum! Node.js AWS serverda muvaffaqiyatli ishga tushdi!<p>Tabrilayman!</p></h1>",
  );
});

// Server 3000-portda va barcha tarmoq interfeyslarida tinglaydi
server.listen(3000, "0.0.0.0", () => {
  console.log("Serverda juda yaxshi ishlayapti: http://your-public-ip:3000");
});
