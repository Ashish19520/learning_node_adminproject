const express = require('express')
const app = express();
const port = 3000;
const cors=require("cors")
require("./config");
const product=require('./productmodel')

app.use(express.json())
app.use(cors());

app.post('/create', async (req, res) =>{
  const data = new product(req.body);
  let result = await data.save();
  // res.send(req.body)
  res.send(result);
  console.log(result);
})

app.get("/list", async (req, res) => {
  let data = await product.find();
  res.send(data);
  console.log(data);
});


app.put("/update", async (req, res) => {
  const data =await product.updateOne({name:req.body.name},{$set:req.body});
  res.send(data);
  console.log(data);
});

app.delete("/delete/:_id", async (req, res) => {
  let data = await product.deleteOne(req.params);
  res.send(data);
  console.log(req.params);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))