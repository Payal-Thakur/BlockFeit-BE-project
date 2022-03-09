const express = require("express");
const router = express.Router();
const { isSignedIn, isTokenPresent } = require("../controllers/authentication");
const { check } = require("express-validator");
const { requestedVendor, getAllReports, approveVendorRequest, productRequestedVenodr, sellProuctToVendor } = require("../controllers/manufacturer");
const { addRetailerBCN, sellProductsToRetailerBCN } = require("../contract-controllers/contractUtilities")
const { getVendorByVendorID } = require("../controllers/vendor");



router.get('/requestedvendor', isTokenPresent, isSignedIn, requestedVendor);
router.get('/reports', getAllReports);

// approved Vendor Request;

router.post("/approveRequest", approveVendorRequest, getVendorByVendorID ,addRetailerBCN);
router.get("/productrequestedvenodr", productRequestedVenodr);
router.post("/sellProductToVendor", sellProuctToVendor, sellProductsToRetailerBCN);

module.exports = router;