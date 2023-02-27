const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost", //server or local
  user: "root", //default user
  password: "",
  database: "test", //database name
});

con.connect((err) => {
  if (err) {
    console.warn("not connect");
  } else {
    console.warn("connected!!!");
  }
});

module.exports=con;