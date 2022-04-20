require("dotenv").config();
const { validationResult } = require("express-validator");
const { generateKeys } = require("../utilities/keyGeneration");
const { mysqlConnection } = require("../database-connection/mysqlConfig");
const { userQueries } = require("../utilities/queries");
const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");
const { json } = require("body-parser");

// logger
const logger = (msg) => console.log(msg);

const fieldValidator = async (req, res, next) => {
    const errors = await validationResult(req);

    if (!errors.isEmpty()) {
        let msgs = [];
        errors.array().forEach((err) => msgs.push(err.msg));
        return res.status(422).json({
            error: msgs,
        });
    }
    next();
};

const login = (req, res) => {
    const email = req.body.email;
    const query = userQueries.getCustomerUsingEmail;

    mysqlConnection.query(query, [email], (err, result, fields) => {
        if (!!err) {
            // error occured
            return res.status(500).json({
                messgae: "Something went wrong, Please try again",
                error: err,
            });
        }

        if (result.length == 0) {
            // user Dosen't exist on this email id

            return res.status(404).json({
                message: "User dosen't exist with given Email id or check ID",
            });
        }

        const customer = result[0];

        console.log("Login Result : ", customer);

        if (customer.customer_password !== req.body.password) {
            return res.status(400).json({
                message: "Wrong password, please check again!",
            });
        } else if (customer.customer_type !== req.body.type) {
            return res.status(400).json({
                message: "Type mismatched!",
            });
        }

        const token = jwt.sign(
            { _id: customer.customer_public_key, type: "customer" },
            process.env.SECREAT
        );
        res.cookie("token", token, { expire: new Date() + 99999 });

        return res.status(200).json({
            message: "User Logged in successfully",
            user: customer,
            token: token,
        });
    });
};

const vendorLogin = (req, res) => {
    const { password } = req.body;
    const { vendor } = req;
    if (password !== vendor.vendor_password) {
        return res.status(400).json({
            message: "Incorrect password",
        });
    }

    const token = jwt.sign(
        { _id: vendor.vendor_public_key, type: "vendor" },
        process.env.SECREAT
    );
    res.cookie("token", token, { expire: new Date() + 99999 });

    return res.status(200).json({
        message: "User Logged in successfully",
        user: vendor,
        token: token,
    });
};

const signOut = (req, res) => {
    res.clearCookie("token");
    res.json({
        message: "User signout successfully",
        route: req.url,
        body: req.body,
    });
};

const registerCustomer = (req, res) => {
    console.log(JSON.stringify(req.body));
    if (req.user) {
        return res.status(400).json({
            msg: "User Already exist with given email",
        });
    }

    const query = userQueries.addNewUser;

    const { privateKey, publicKey } = generateKeys();
    const customer_type = "customer";

    req.customer_publicKey = publicKey;
    req.customer_privateKey = privateKey;

    const {
        customer_name,
        customer_email,
        customer_phone_no,
        customer_city,
        customer_state,
        customer_password,
    } = req.body;

    const { customer_publicKey, customer_privateKey } = req;

    console.log(
        `DB : Level : Private key : ${customer_privateKey}, Public key : ${customer_publicKey}`
    );

    mysqlConnection.query(
        query,
        [
            customer_privateKey,
            customer_publicKey,
            customer_name,
            customer_email,
            customer_phone_no,
            customer_city,
            customer_state,
            customer_type,
            customer_password,
        ],
        (err, result, fields) => {
            if (!!err) {
                return res.status(400).json({
                    message: "Something went wrong while adding new customer",
                    error: err,
                });
            }

            console.log("New user Added into DB");

            return res.status(200).json(
                (DB_MSG = {
                    db_message: "New user Added Successfully",
                    db_result: result,
                    Keys: {
                        privateKey: privateKey,
                        publicKey: publicKey,
                    },
                })
            );
        }
    );
};

const isSignedIn = expressJWT({
    secret: process.env.SECREAT,
    userProperty: "auth",
    algorithms: ["HS256"],
});

const isTokenPresent = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(400).json({
            message: "Token not present",
        });
    }
    next();
};

module.exports = {
    login,
    registerCustomer,
    fieldValidator,
    signOut,
    isSignedIn,
    isTokenPresent,
    vendorLogin,
};
