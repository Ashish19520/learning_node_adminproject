const express = require('express');
const app = express();
const port = 4500;

const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Please Provide age");
    }
    else if(req.query.age<18){
        res.send("sorry you are not 18 you can't drive");
    }
    else{
        next();
    }
    console.log("request is filtered");
    next();
}

app.use(reqFilter);
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to home page you can drive because you are ${req.query.age} of age</h1>`)});

    app.get('/about',(req,res)=>{
        res.send('<h1>welcome to about page</h1>')
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))