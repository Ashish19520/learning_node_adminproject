const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-comm");

const productSchema = new mongoose.Schema({
  name: String,
  class: Number,
  profile: String,
  system: String,
});

let productSave=async()=>{
   const productModel=mongoose.model('products',productSchema);
   const data=new productModel({
    name:" m11",
    class:17,
    profile:"full-stack dev",
    system:"m-60"
   });
    const result = await data.save();
    console.log(result);
}
// productSave();

let productUpdate=async()=>{
     const product =  mongoose.model("products", productSchema);
      const data = await product.updateOne(
        { name: " m11"},  
        {$set:{class: 19,
        profile: "changing profile",
        system: "m-60",
      }}
      )
console.log(data);
}
// productUpdate();

let productDelete=async()=>{
    const product=mongoose.model("products",productSchema);
    const data=await product.deleteMany({name:" m11"});
    console.log(data);
}
// productDelete();

const findInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.find({ name: "lal-bhadur-shastri" });
  console.log(data);
};

findInDB();


