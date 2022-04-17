const express = require("express");
const router = express.Router();
const {
  isSignedIn,
  isTokenPresent,
  fieldValidator,
} = require("../controllers/authentication");
const { check } = require("express-validator");
const {
  addProduct,
  productHistory,
  userProductHistory,
  productOfOwner,
  sellProduct,
  myProducts,
} = require("../controllers/product");
const {
  addProductBCN,
  verifyOwnershipBCN,
  getOwnerOfProductBCN,
  sellProductsBCN,
} = require("../contract-controllers/contractUtilities");

router.post(
  "/addproduct",
  isTokenPresent,
  isSignedIn,
  addProduct,
  addProductBCN
);

router.get("/verifyOwnership", verifyOwnershipBCN);
router.get("/productOwner", getOwnerOfProductBCN);
router.get("/product-history", productHistory);
router.get("/user-history", userProductHistory);
router.get("/owner-products", productOfOwner, myProducts);

router.post("/sell-product", productOfOwner, sellProduct, sellProductsBCN);

module.exports = router;
