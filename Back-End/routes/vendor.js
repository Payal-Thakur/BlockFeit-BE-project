const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  vendorRegistration,
  requestProductToManufacturer,
  sellProductToCustomer,
  getVendorByVendorID,
  getVendorByID,
} = require("../controllers/vendor");
const { fieldValidator } = require("../controllers/authentication");

router.post(
  "/vendorregistration",
  [
    check("vendor_name", "Vendor Name required").trim().isLength({ min: 2 }),
    check("vendor_email", "valid Email is required").isEmail(),
    check("vendor_mobile_no", "mobile number is Required")
      .trim()
      .isLength({ min: 10 }),
    check("vendor_city", "Enter city").trim().isLength({ min: 2 }),
    check("vendor_state", "Enter state").trim().isLength({ min: 2 }),
    check("vendor_password", "password must contain at least 6 chars")
      .trim()
      .isLength({ min: 6 }),
    check("vendor_shop_name", "Shop name is Required")
      .trim()
      .isLength({ min: 3 }),
  ],
  fieldValidator,
  vendorRegistration
);

router.post("/requestProductToManufacturer", requestProductToManufacturer);
router.post("/sellProductToCustomer", sellProductToCustomer);

router.get("/vendorDetail", getVendorByVendorID, getVendorByID);
router.get("/vendorDetailBCN");

module.exports = router;
