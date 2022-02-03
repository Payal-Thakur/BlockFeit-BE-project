
const { json } = require("body-parser");
const { mysqlConnection } = require("../database-connection/mysqlConfig")
const { userQueries } = require("../utilities/queries")





const findCustomerByEmail = (req, res, next) => {


    const email = req.email;

    const query = userQueries.getCustomerUsingEmail;
    mysqlConnection.query(query, [email], (err, result, fields) => {

        if(err) {

            return res.status(500).json({

                message : "Something Went wrong while creating getting customer by email",
                err: err.message
            });
        }
        req.user = result[0];
        next();
    });


}

