//count the api hits
const  express = require('express')
const app = express()
const EventEmittr=require('events');
const port = 3000
const event=new EventEmittr();

let count=0;
event.on('CountApi',()=>{
    ++count;
    console.log("Events called");
    console.log(count)
})   

app.get("/first", (req, res) => {
  res.send("First Api!");
    event.emit("CountApi");
});

app.get("/second", (req, res) => {
  res.send("second api!");
  event.emit("CountApi");
});

app.get("/third", (req, res) => {
   res.send("third api");
   event.emit("CountApi");
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))