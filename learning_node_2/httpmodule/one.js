const http = require("http");

const server=http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>Node tutorial hai ye bhai</h2>");
    res.end();
  })
  .listen(5000, () => console.log("listening on port 5000..."));

module.exports = server;
