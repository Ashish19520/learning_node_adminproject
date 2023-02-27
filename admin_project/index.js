const express = require('express');
require("./Db/configdatabase");
const User=require("./Db/user")
const app = express()
const port = 5000
const cors=require("cors");
const Product = require('./Db/product');
const jwt=require('jsonwebtoken');
const { response } = require('express');
const jwt_key="e-comm";

app.use(express.json());

app.use(cors());
app.post('/register',async (req, res) => {
    let user=new User(req.body);
    let result=await user.save();
     result = result.toObject();
     delete result.password;
     if(result){
      jwt.sign({result},jwt_key,{expiresIn:"2h"},(err,token)=>{
        if(err){
          res.send({result:"No User found"});
        }
        else{
          res.send({result,auth:token})};
        }
  )}
})

app.post("/login", async (req,res) => {
    if(req.body.email&&req.body.password){
  let user = await User.findOne(req.body).select("-password");
  if(user){
    jwt.sign({user},jwt_key,{expiresIn:"2h"},(err,token)=>{
      if(err){
        res.send({result:"No User found"});
      }
      else{
        res.send({user,auth:token})};
      }
)}}
});
i
app.post("/add-product",async (req,res)=>{
  let product=new Product(req.body);
  let result=await product.save();
  await res.send(result);
})

app.get("/products",verifytoken,async (req,res)=>{
  let product=await Product.find();
  if(product.length>0){
    res.send(product)
  }
  else{
    res.send("no product found")
  }
})
app.delete("/product/:id",async (req,res)=>{
  result=await Product.deleteOne({_id:req.params.id})
  res.send(result);
})
app.get("/update/:id", async (req,res)=>{
  result=await Product.findOne({_id:req.params.id})
  if(result){
    res.send(result)
  }
  else{
    res.send({result:"No Record Found"})
  }
})
 
app.put("/product/:id",async (req,res)=>{
  let result= await Product.updateOne(
    {_id:req.params.id},
    {
      $set:req.body
    })
    res.send(result)
})  

app.get("/search/:key",async (req,res)=>{
  let result=await Product.find({
  '$or':[
    {name:{$regex:req.params.key}},
    {category:{$regex:req.params.key}},
    {company:{$regex:req.params.key}}
  ]
})
res.send(result);
})

 function verifytoken(req,res,next){
  let token=req.headers['authtoken'];
  if(token){
    token=token.split(" ")[1];
    jwt.verify(token,jwt_key,(err,valid)=>{
      if(err){
        res.status(401).send({result:"Please Provide Valid token"})
      }
      else{
          next();
      }
    })
  }
  else{
    res.status(403).send({result:"Please Provide a token with headers"})
  }
 }
app.listen(port, () => console.log(`Example app listening on port ${port}!`))