const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'CRUD');

// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath+`/hello${i}.txt`,"this is some text that is going to enter in the file");
// }

fs.readdir(dirPath,((err,data)=>{
    // console.log(data);-->to get an array contain a list of files.
    data.forEach((item)=>{
        console.log(item);
    })
})
);