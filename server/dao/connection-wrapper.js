import mysql from "mysql2";
// Connection = קו תקשורת למסד הנתונים
// const connection = mysql.createConnection({
//   host: "eu-cdbr-west-03.cleardb.net", // Computer
//   user: "b2eb22aa79425d", // Username
//   password: "ff4de926 ", // Password
//   database: "heroku_dab58e13d0033f0", // Database name

//   host: "localhost", // Computer
//   user: "root", // Username
//   password: "1234", // Password
//   database: "vacations", // Database name

// });

let connection;
console.log(process.env.JAWSDB_URL);
if (process.env.JAWSDB_URL) {
  console.log("jaws");
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log("localDB");
  connection = mysql.createConnection({
    host: "localhost", // Computer
    user: "root", // Username
    password: "1234", // Password
    database: "vacations", // Database name
  });
}

// Connect to the database:
connection.connect((err) => {
  if (err) {
    console.log("Failed to create connection + " + err);
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
