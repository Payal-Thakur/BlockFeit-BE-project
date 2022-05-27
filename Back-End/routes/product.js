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
    sellProductToCustomer,
    productById,
} = require("../controllers/product");
const {
    addProductBCN,
    verifyOwnershipBCN,
    getOwnerOfProductBCN,
    sellProductsBCN,
    sellProductToCustomerBCN,
} = require("../contract-controllers/contractUtilities");
const { route } = require("./manufacturer");
const { mysqlConnection } = require("../database-connection/mysqlConfig");

router.post(
    "/addproduct",
    isTokenPresent,
    isSignedIn,
    addProduct,
    addProductBCN
);

// router.get("/verifyOwnership", verifyOwnershipBCN);
router.get("/verifyOwnership", (req, res) => {
    let { product_id, owner_id } = req.body;

    if (product_id === undefined) product_id = req.query.product_id;
    if (owner_id === undefined) owner_id = req.query.owner_id;

    console.log(product_id + "- " + owner_id);

    const query = `select * from product where product_id = ? and owner_id = ?`;
    mysqlConnection.query(query, [product_id, owner_id], (err, result) => {
        console.log(JSON.stringify(result));
        return res.status(200).json({
            message: `Recived Verification Data Successfully, P_ID: ${product_id}, O_ID: ${owner_id}`,
            result: result.length == 1,
        });
    });
});
router.get("/productOwner", getOwnerOfProductBCN);
router.get("/product-history", productHistory);
router.get("/user-history", userProductHistory);
router.get("/owner-products", productOfOwner, myProducts);

router.post("/sell-product", productOfOwner, sellProduct, sellProductsBCN);
router.post(
    "/sell-product-to-customer",
    sellProductToCustomer,
    sellProductToCustomerBCN
);

router.get("/productByID", productById);

module.exports = router;
