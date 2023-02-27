const dbConnect = require("./databaseConfig");

let main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};
console.log("kam done");

main();
