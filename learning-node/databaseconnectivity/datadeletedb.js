const dbConnect = require("./databaseConfig");

const delete1 = async () => {
  const db = await dbConnect();
  const data = await db.deleteMany({ name: "m 10" });
  console.log(data);
};
delete1();
