const express=require('express');
const app=express();

app.get('',(req,res)=>{
    console.log("name is ->",req.query.name);
    res.send(`<h1>hello ${req.query.name} how are you</h1><br>
    <input type="text" placeholder="enter your name" value=${req.query.name}>
    <a href="/about"><button> go to about page</button></a>
    `);
});

app.get('/about',(req,res)=>{
    res.send(
        [{name:"ashish",
          class:"12th"}
    ,
    {
            name:"akhil",
            class:"12th b"
    }
        ]
    );
});  
app.get('/help',(req,res)=>{
    res.send("hello this is help section")});

app.listen(5000);
console.log("connect successfully 1"); 
