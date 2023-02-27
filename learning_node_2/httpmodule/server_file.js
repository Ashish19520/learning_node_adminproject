const http = require("http");
const fs=require("fs");

const server=http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    fs.readFile(__dirname+"/hello.txt","utf8",
   (err,data)=>{
    if(err) throw err;
    console.log(data);
    res.write(data);
     
    res.end();
  })})
  .listen(5000, () => console.log("listening on port 5000..."));

module.exports = server;
