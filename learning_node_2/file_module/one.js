const fs=require("fs");
 const raam=fs.readFile(__dirname+"/hello.txt","utf8",
(err,data)=>{
    if(err) throw err;
    console.log(data);
})

const shyam=fs.unlink(__dirname+"/hello.txt",(err,data)=>{
if(err) throw err;
console.log("file deleted",data)
})
// module.exports=raam;
module.exports=shyam;