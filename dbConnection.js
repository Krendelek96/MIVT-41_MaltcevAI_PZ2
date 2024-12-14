const mysql = require("mysql2");

const db_connection = mysql
  .createConnection({
    host: "root", // имя хоста
    user: "root", // имя пользователя
    database: "MIVT41_Maltcev", // имя базы данных
    password: "1237", // пароль от базы данных
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

module.exports = db_connection;
