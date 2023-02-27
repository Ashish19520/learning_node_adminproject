const mongoose=require('mongoose');

 const main=async()=>{
        await mongoose.connect("mongodb://localhost:27017/e-comm");
        const productSchema=new mongoose.Schema(
            {
                name:String,
                class:Number
            }
        );

        const productModel=mongoose.model("products",productSchema);
        let data=new productModel({
            name:"m 10",
            class:12,
            profile:"dashbhoard"
        })
        let result=await data.save();
        console.log(result);
 }
       