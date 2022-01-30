// create here Mysql object and export it
let mysql = require('mysql2');
let { mysqlDatabaseConnectionObj } = require("./databaseObject");

let mysqlConnection = mysql.createConnection(mysqlDatabaseConnectionObj);

mysqlConnection.connect(err => {

    if(!!err) {
        console.log("Database connection fail ->>>>  "+ err.message + "  \nin " + __dirname + "\n" + err);
    }
    else {
        console.log("Database connected sucessfully to " + mysqlDatabaseConnectionObj.database);
    }
});


module.exports = { mysqlConnection };