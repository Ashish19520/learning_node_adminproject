const http=require('http');

const handleFunction=(req,res)=>{
    res.write("<h1>Hello again</h1>");
    res.end();
}
http.createServer((req,res)=>{
    res.write("<h1>Hello Jay shree ganesha</h1>");
    res.end();
}).listen(4500);
http.createServer(handleFunction).listen(3000);