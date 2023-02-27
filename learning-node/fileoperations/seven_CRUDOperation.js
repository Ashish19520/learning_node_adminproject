const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'CRUD');
const filePath=`${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,"The Quick brown fox jumps");


// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath," over the Laxy dog",((err)=>{
//     if(!err) console.log('file updated Succefully');
// }));

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log('file name is updated');
// })

fs.unlinkSync(`${dirPath}/fruit.txt`);
