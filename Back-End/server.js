require("dotenv").config();
const express = require("express");
const { web3, contract } = require("./ganache-connection/web3Config");
const { mysqlConnection } = require("./database-connection/mysqlConfig");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.LOCALHOST_SERVER_PORT || 3000;

// export routes
const authenticationRoute = require("./routes/authentication")



// middlewares
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// routes
app.use("/api", authenticationRoute);



app.listen(PORT, () => {

    console.log(`Server is up and listning port ${PORT}`);

})
