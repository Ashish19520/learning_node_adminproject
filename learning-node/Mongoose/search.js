const express = require("express");
const app = express();
const port = 3000;
require("./config");
const product = require("./productmodel");

app.use(express.json());

app.get("/search/:key", async (req, res) => {
  let data = await product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { profile: { $regex: req.params.key } },
    ],
  });
  res.send(data);
  console.log(data);
});
app.listen(port, () => console.log(`Example app listening  port ${port}!`));