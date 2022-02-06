require('dotenv').config();
const { validationResult } = require("express-validator");
const { publicKey, privateKey } = require("../utilities/keyGeneration");
const { mysqlConnection } = require("../database-connection/mysqlConfig");
const { userQueries } = require("../utilities/queries");
const jwt = require('jsonwebtoken');
const expressJWT = require("express-jwt");



// logger
const logger = (msg) => console.log(msg);

const fieldValidator = (req, res, next) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {

        let msgs = [];
        errors.array().forEach(err =>  msgs.push(err.msg))
        return res.status(422).json({
            error : msgs
        });
    }
    next();
}

const login = (req, res) => {


    const email = req.body.username;
    const query = userQueries.getCustomerUsingEmail;

    mysqlConnection.query(query, [email], (err, result, fields) => {

        if(!!err) {
            // error occured
            return res.status(500).json({

                messgae: "Something went wrong, Please try again",
                error: err
            });
        }

        if(result.length == 0) {
            // user Dosen't exist on this email id
            
            return res.status(404).json({
                message: "User dosen't exist with given Email id or check ID"
            });
        }

        const customer = result[0];

        console.log("Login Result : ", customer);

        if(customer.customer_password !== req.body.password) {
            return res.status(400).json({
                message: "Wrong password, please check again!"
            });
        }else if(customer.customer_type !== req.body.type) {

            return res.status(400).json({
                message: "Type mismatched!"
            });
        }

        const token = jwt.sign({ _id : customer.publicKey }, process.env.SECREAT);
        res.cookie("token", token, {expire : new Date() + 7 });

        return res.status(200).json({

            message: "User Logged in successfully",
            user: customer
        })
    });
};


const signOut = (req, res) => {

    res.clearCookie("token");
    res.json({
        message: "User signout successfully",
        route: req.url,
        body: req.body
    });
}


const signup = (req, res) => {


    const query = userQueries.addNewUser;

    const customer_private_key = publicKey(); 
	const customer_public_key = privateKey();
	const customer_name = req.body.name;
	const customer_email = req.body.email;
	const customer_phone_no = req.body.phone_no;
	const customer_city = req.body.city;
	const customer_state = req.body.state;
	const customer_type = "customer";
	const customer_password  = req.body.password;

    mysqlConnection.query(query, [customer_private_key, 
        customer_public_key, 
        customer_name,
        customer_email,
        customer_phone_no,
        customer_city,
        customer_state,
        customer_type,
        customer_password], (err, result, fields) => {

            if(!!err) {

                return res.status(400).json({
                    message: "Something went wrong while adding new customer",
                    error: err
                });
            }

            console.log("New user Added into DB");
            console.table(fields);

            return res.status(200).json({

                message: "New user Added Successfully",
                result : result
            });
        });
}

const isSignedIn = expressJWT({
    secret : process.env.SECREAT,
    userProperty: "auth",
    algorithms: ['HS256']
});



module.exports = {

    login,
    signup,
    fieldValidator,
    signOut,
    isSignedIn

}






