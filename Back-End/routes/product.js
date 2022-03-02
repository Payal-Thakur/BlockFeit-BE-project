const express = require("express");
const router = express.Router();
const { isSignedIn, isTokenPresent, fieldValidator } = require("../controllers/authentication");
const { check } = require("express-validator");
const { addProduct } = require("../controllers/product");
const { addProductBCN } = require("../contract-controllers/contractUtilities");



router.post('/addproduct',
    isTokenPresent,
    isSignedIn,
    addProduct,
    addProductBCN
);



module.exports = router;