const express = require('express')
const app = express()
const con=require('./config');
const port = 3000


app.use(express.json())

app.get('/getmys', (req, res) => {
    con.query("select * from users", (err, result) => {
      //users is a table in test
      if (err) {
        res.send(err);
      } else {
        res.send(result);
        console.log("connected successfully");
        console.log(result);
      }
    });
    })
1

app.post('/postmys',(req, res) => {
    con.query("INSERT INTO users SET ?",req.body,(err,result,fields)=>{
            if (err) {
        res.send(err);
      } 
      else {
        res.send(result);
        console.log("connected successfully");
        console.log(result);
      }
    })
})
app.put("/updatemys/:name",(req,resp)=>{
  const data= [req.body.Name,req.body.class,req.body.profile,req.params.name];
  con.query("UPDATE users SET Name = ?, class = ?, profile = ? WHERE Name = ?",
  data,(err,results,fields)=>{
    if(err){
      resp.send(err)
    }else{
      resp.send(results);
    }
    
  })
})
 

app.delete("/deletemys/:class", (req, res) => {
  con.query('DELETE FROM users WHERE class='+req.params.class,
    (err,result,fields)=> {
           if (err) {
        res.send(err);
      } 
      else {
        res.send(result);
        console.log(result);
      }
    })
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))