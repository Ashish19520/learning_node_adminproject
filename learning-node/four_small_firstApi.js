const http=require('http'); 
const data=require('./data');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    // res.write(JSON.stringify({
    //     name:"ashish",
    //     email:"ashish19520@gamil.com",
    // }))
    res.write(JSON.stringify(data))
    res.end();
        }
        ).listen(4500);
        console.log("created succesfully")  