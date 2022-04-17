const express = require("express");
let router = express.Router();
const {
  login,
  registerCustomer,
  fieldValidator,
  signOut,
  isSignedIn,
  isTokenPresent,
} = require("../controllers/authentication");
const { check } = require("express-validator");
const { findCustomerByEmail } = require("../controllers/customer");

router.post(
  "/login",
  [
    check("email", "Invalid username/Email").trim().isEmail(),
    check("password", "Password should be at least 5 chars").isLength({
      min: 5,
    }),
    check("type", "Invalid User type").isIn([
      "customer",
      "vendor",
      "manufacturer",
      "Customer",
    ]),
  ],
  fieldValidator,
  login
);

router.post(
  "/register",
  [
    check("customer_name", "Name is Required").trim(),
    check("customer_email", "Email is Required..").isEmail(),
    check("customer_phone_no", "Invalid Phone number").isLength({
      min: 10,
      max: 12,
    }),
    check("customer_city", "Invalid City name").isLength({ min: 2 }),
    check("customer_state", "Invalid state name").isLength({ min: 2 }),
    check("customer_password", "Password should be at least 6 chars").isLength({
      min: 5,
    }),
  ],
  fieldValidator,
  registerCustomer
);

router.post("/signout", signOut);
module.exports = router;
