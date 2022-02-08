const { mysqlConnection } = require("../database-connection/mysqlConfig")
const { userQueries } = require("../utilities/queries")

const findCustomerByEmail = (req, res, next) => {

    const email = req.body.email;
    const query = userQueries.getCustomerUsingEmail;
    mysqlConnection.query(query, [email], (err, result, fields) => {

        if(err) {

            return res.status(500).json({

                message : "Something Went wrong while creating getting customer by email",
                err: err.message
            });
        }
        if(result.length == 0)
            next();
        else {
            req.user = result[0];
            next();
        }
    });
}

const customerProfile = (req, res) => {

    if(!req.user) {

        return res.status(404).json({

            msg: "Customer Dosen't exist with given email id, Please try to Register or check email"
        });
    }

    if(req.auth._id !== req.user.customer_public_key) {

        req.user.customer_private_key = undefined,
        req.user.customer_password = undefined,
        req.user.customer_id = undefined,
        req.user.customer_phone_no = undefined

    }

    let response = {

        message: "user successfully found",
        user : req.user
    }


    return res.status(200).json(response);
}

const addReport = (req, res) => {

    const query = userQueries.reportProuct;
    const { reporter_public_key,
        reported_product_id,
        report_details
    } = req.body;
    mysqlConnection.query(query, [
            reporter_public_key,
            reported_product_id,
            report_details], (err, result, fields) => {

                if(!!err) {

                    return res.status(400).json({
                        message: "Couldn't send Report",
                        error: err
                    });
                }

                return res.status(200).json({

                    message: "Thank You for Your Feeback",

                });
        });

}



module.exports = {

    findCustomerByEmail,
    customerProfile,
    addReport
}
