const  express = require('express')
const multer=require('multer')
const app = express()
const port = 3000

const uploads=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'../raamjikafolder')
        },
          filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+'.jpg');
          }
    }),
}).single('file');

app.post('/uploads',uploads,(req, res) => 
res.send('file received'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))