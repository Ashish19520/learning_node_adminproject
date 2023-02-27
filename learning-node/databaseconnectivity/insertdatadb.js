const dbConnect = require("./databaseConfig");

const insert = async () => {
  let db = await dbConnect();
  const result = await db.insertOne({
    name: "lal-bhadur-shastri",
    profile: "pm of india",
    class: "bahrat ka asli put",
    price: "anmool-bemol",
  });
  if (result.acknowledged) {
    console.log("data entered succesfully");
  }
};
insert();
