const express = require('express');
let router = express.Router();
const { login, signup } = require("../controllers/authentication")
const { check } = require("express-validator");
const { findCustomerByEmail } = require("../controllers/customer")

router.post('/login', login);

router.post('/signup',[

        check("name", "Name is Required").trim(),
        check("email", "Email is Required..").isEmail(),
        check("phone_no", "Invalid Phone number").isLength({min:10, max:12}),
        check("city", "").isLength({min: 2}),
        check("state", "").isLength({min: 2}),
        check("password", "Password should be at least 6 chars").isLength({ min : 5})
    ],
    findCustomerByEmail,
    signup
);






module.exports = router;