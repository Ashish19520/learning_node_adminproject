const express=require('express');
const path=require('path');
const app=express();
const publicPath=path.join(__dirname,'html');

app.set('view engine','ejs');

app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/profile',(req,res)=>{
    const user={
        name:"ashish",
        class:"12th",
        scholl:"raja ram",
        skills:['java','c','react','html','css']
    }
    res.render('profile',{user});
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.listen(5000);
console.log("connected succefully 1");