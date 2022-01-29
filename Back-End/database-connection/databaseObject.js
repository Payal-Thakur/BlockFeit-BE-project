// define mysql object 

let mysqlDatabaseConnectionObj = {

    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    port : process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME

};

module.exports =  { mysqlDatabaseConnectionObj };



