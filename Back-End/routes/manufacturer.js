const express = require("express");
const router = express.Router();
const { isSignedIn, isTokenPresent } = require("../controllers/authentication");
const { check } = require("express-validator");
const {
  requestedVendor,
  getAllReports,
  approveVendorRequest,
  productRequestedVenodr,
  sellProuctToVendor,
  manufacturerDetails,
} = require("../controllers/manufacturer");

const { getVendorByVendorID } = require("../controllers/vendor");

router.get("/requestedvendor", requestedVendor);
router.get("/reports", getAllReports);
router.get("/manufacturer-details", manufacturerDetails);

// approved Vendor Request;

router.post("/approveRequest", approveVendorRequest, getVendorByVendorID);
router.get("/productrequestedvenodr", productRequestedVenodr);
router.post("/sellProductToVendor", sellProuctToVendor);

module.exports = router;
