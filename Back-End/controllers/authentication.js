
const { validationResult } = require("express-validator");
const { publicKey, privateKey, privateKey } = require("../utilities/keyGeneration");
 

// logger
const logger = (msg) => console.log(msg);

const login = (req, res) => {

    console.log("Hitting login route");
    res.status(400).json({

        message : "in Login rote"
    });
};



const signup = (req, res) => {


    const errors = validationResult(req);

    if(!errors.isEmpty()) {

        let msgs = [];
        errors.array().forEach(err =>  msgs.push(err.msg))
        return res.status(422).json({
            error : msgs
        });
    }

    if(req.user) {

        return res.status(400).json({
            message : "Email already exist, Please try Different Email or Login"
        })
    }

    const customer_private_key = publicKey(); 
	const customer_public_key = privateKey();
	const customer_name;
	const customer_email;
	const customer_phone_no;
	const customer_city;
	const customer_state;
	const customer_type;
	const customer_password





}



module.exports = {

    login,
    signup
}






