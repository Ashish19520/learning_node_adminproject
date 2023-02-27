const express= require("express");
const path=require('path')

const app=express();
const homePath=path.join(__dirname,'html');

app.use(express.static(homePath));
app.listen(5000);
