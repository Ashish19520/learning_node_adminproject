const express=require('express');
const dbConnect=require('../databaseconnectivity/databaseConfig')
const mongodb=require('mongodb')
const app=express();
const data=require('../data');
const { ListIndexesCursor } = require('mongodb');

app.use(express.json());

app.get("/",async (req,resp)=>{
    let dbData=await dbConnect();
    dbData=await dbData.find().toArray();
    resp.send(dbData);
})

app.post("/",async (req,res)=>{
        let dbData=await dbConnect();
        dbData=await dbData.insertOne(req.body);
        console.log("data entered succesfully");
        res.send(dbData);

})


app.put('/:name',async (req,res)=>{
    let dbData=await dbConnect();
    dbData=await dbData.updateOne({name:req.params.name},{$set:req.body});
    console.log("data updated succesfully");
    res.send(dbData);
})

// app.delete("/:name", async (req, res) => {
app.delete("/:id", async (req, res) => {
  let dbData = await dbConnect();
//   dbData = await dbData.deleteOne({name:req.params.name})
  dbData = await dbData.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
  console.log("deleted updated succesfully");
  res.send(dbData);
});

console.log("api created successfully");
app.listen(5500); 