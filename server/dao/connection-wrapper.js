import mysql from "mysql2";

// Connection = קו תקשורת למסד הנתונים
// const connection = mysql.createConnection({

//   host: "localhost", // Computer
//   user: "root", // Username
//   password: "1234", // Password
//   database: "vacations", // Database name

// });

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Connect to the database:
connection.connect((err) => {
  if (err) {
    console.log("Failed to create connection + " + err.stack);
    return;
  }
  console.log("We're connected to MySQL");
});

// One function for executing select / insert / update / delete:
function execute(sql) {
  return new Promise((resolve, reject) => {
    connection.execute(sql, (err, result) => {
      if (err) {
        // console.log("Error " + err);
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

function executeWithParameters(sql, parameters) {
  return new Promise((resolve, reject) => {
    connection.execute(sql, parameters, (err, result) => {
      if (err) {
        // console.log("Error " + err);
        console.log("Failed interacting with DB, calling reject");
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

export default {
  execute,
  executeWithParameters,
};
