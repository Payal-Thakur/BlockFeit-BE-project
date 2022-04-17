const express = require("express");
const router = express.Router();
const {
  findCustomerByEmail,
  customerProfile,
  addReport,
  findProfileByPublicKey,
} = require("../controllers/customer");
const {
  isSignedIn,
  isTokenPresent,
  fieldValidator,
} = require("../controllers/authentication");
const { check } = require("express-validator");

router.get(
  "/customerprofile",
  isTokenPresent,
  isSignedIn,
  findCustomerByEmail,
  customerProfile
);

router.post(
  "/reportproduct",
  [
    check("reporter_public_key", "Your Public Key is Important").isLength({
      min: 5,
    }),
    check("reported_product_id", "Product Id Is important").isLength({
      min: 5,
    }),
    check("report_details", "Report Details are Required").isLength({ min: 5 }),
  ],
  fieldValidator,
  addReport
);

module.exports = router;
