const express = require("express");
const router = express.Router();
const { isSignedIn, isTokenPresent } = require("../controllers/authentication");
const { check } = require("express-validator");
const { requestedVendor, getAllReports } = require("../controllers/manufacturer");




router.get('/requestedvendor', isTokenPresent, isSignedIn, requestedVendor);
router.get('/reports', getAllReports);




module.exports = router;