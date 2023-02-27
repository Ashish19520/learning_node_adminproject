//connection of node js and mysql
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",  //server or local
  user: "root",        //default user
  password: "",         
  database: "test",     //database name
});

con.connect((err)=>{
  if(err)
  {
    console.warn("not connect")
  }else{
    console.warn("connected!!!")
  }
})

con.query("select * from users", (err, result) => {  //users is a table in test
  if (err) {
    console.warn("some error");
  } else {
    console.warn(result);
  }
});
