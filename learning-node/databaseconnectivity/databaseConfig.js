const { MongoClient } = require("mongodb"); //in built method
const url = "mongodb://localhost:27017"; // url to connect local database
const database = "e-comm"; // we create in database of name 'e-comm
const client = new MongoClient(url); //MongoClient needs path to connect

const  dbConnect=async ()=> {     //an async funciton

  let result = await client.connect(); //connect is in bulit
  let db = result.db(database); // connrct with specified database
    return db.collection("products"); // connect with specified table
//   let response = await collection.find({}).toArray(); //convert them in arraay form for the sake of convienence
//   console.log("connected succesfully");
//   console.log(response);
}

module.exports=dbConnect;
