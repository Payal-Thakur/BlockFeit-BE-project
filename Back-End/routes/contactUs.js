const express = require("express");
const router = express.Router();
const { check } = require('express-validator');
const req = require("express/lib/request");
const { getContactValues , insertContact } = require("../controllers/contactUs")
const { fieldValidator } = require("../controllers/authentication")




router.get('/contactus', getContactValues);
router.post('/addcontactus',
[

    check("name", "Ur name is Required").trim().isLength({min: 2}),
    check("email", "Email is Required").trim().isEmail(),
    check("details", "Details are Required").trim().isLength({min: 2})

], fieldValidator ,insertContact)











module.exports = router;