const express = require('express');
let router = express.Router();
const { login, registerCustomer, fieldValidator, signOut, isSignedIn, isTokenPresent } = require("../controllers/authentication")
const { check } = require("express-validator");
const { findCustomerByEmail } = require("../controllers/customer")

router.post('/login',[

        check("username", "Invalid username").trim().isEmail(),
        check("password", "Password should be at least 6 chars").isLength({ min: 5 }),
        check("type", "Invalid type").isIn(['customer', 'vendor', 'manufacturer'])
    ],
    fieldValidator,
    login
);

router.post('/register',[

        check("name", "Name is Required").trim(),
        check("email", "Email is Required..").isEmail(),
        check("phone_no", "Invalid Phone number").isLength({min:10, max:12}),
        check("city", "Invalid City name").isLength({min: 2}),
        check("state", "Invalid state name").isLength({min: 2}),
        check("password", "Password should be at least 6 chars").isLength({ min : 5})
    ],
    fieldValidator,
    findCustomerByEmail,
    registerCustomer
);

router.post('/signout', signOut)




module.exports = router;