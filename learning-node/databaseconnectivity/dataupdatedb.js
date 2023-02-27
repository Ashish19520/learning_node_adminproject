const dbConnect = require("./databaseConfig");

const update = async () => {
  const db = await dbConnect();
  const data = await db.updateOne(
    { name: "ashish" },
    {
      $set: {
        name: "shivaji maharaj",
        class: "tumhari range se baharr",
      },
    }
  );
  console.log(data);
};
update();
