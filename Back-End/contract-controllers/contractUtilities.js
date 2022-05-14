const { json } = require("body-parser");
const {
    web3,
    contract,
    defaultAccount,
} = require("../ganache-connection/web3Config");

const { transactionOfProduct } = require("../controllers/product");

const DEFAULT_ACCOUNT = "0x729d40954040cA2CD715e875bc74C2fD810bD64B";
const GAS = "6721975";
const GAS_PRICE = "30000000";

const sellProductsBCN = async (req, res) => {
    const { customer_id, owner_id } = req.body;

    // TODO: use map this method to chanege it
    const products = req.products;
    let result;

    products.map(async (product) => {
        await contract.methods
            .sellProduct(product.product_id, customer_id)
            .send({ from: DEFAULT_ACCOUNT, gas: GAS, gasPrice: GAS_PRICE })
            .then((res) => {
                console.log(JSON.stringify(res));
                transactionOfProduct(
                    product.product_id,
                    owner_id,
                    customer_id,
                    res.transactionHash,
                    1
                );
            })
            .catch((err) => {
                transactionOfProduct(
                    product.product_id,
                    owner_id,
                    customer_id,
                    "NO hashed",
                    0
                );
                return res.status(400).json({
                    message: `Something Went wrong while sending products to customer, id : ${customer_id}`,
                    error: err,
                });
            });
    });

    return res.status(200).json({
        message: `Product sold Successfully to customer, id : ${customer_id}`,
        result: result,
    });
};

const sellProductToCustomerBCN = (req, res) => {
    const { customer_id, owner_id, product_id } = req.body;

    contract.methods
        .sellProduct(product_id, customer_id)
        .send({ from: DEFAULT_ACCOUNT, gas: GAS, gasPrice: GAS_PRICE })
        .then((res) => {
            console.log(JSON.stringify(res));
            transactionOfProduct(
                product_id,
                owner_id,
                customer_id,
                res.transactionHash,
                1
            );

            return res.status(200).json({
                message: `Product sold Successfully to customer, id : ${customer_id}`,
            });
        })
        .catch((err) => {
            transactionOfProduct(
                product_id,
                owner_id,
                customer_id,
                "NO hashed",
                0
            );
            return res.status(400).json({
                message: `Something Went wrong while selling products to customer, id : ${customer_id}`,
                error: err,
            });
        });
};

const addProductBCN = (req, res) => {
    const id = req.product_key;
    const { product_owner_id } = req.body;

    contract.methods
        .addProduct(id, product_owner_id)
        .send({ from: DEFAULT_ACCOUNT, gas: GAS, gasPrice: GAS_PRICE })
        .then((result) => {
            result.logsBloom = undefined;
            return res.status(200).json({
                db_result: req.DB_RES,
                bc_result: {
                    message: "Product Added Successfully",
                    Result: result,
                    _id: id,
                },
            });
        })
        .catch((err) => {
            return res.status(400).json({
                message: "Something went wrong while adding Product",
                error: err,
            });
        });
};

// getRetailerDetails(retailer.id);

const getOwnerOfProductBCN = async (req, res) => {
    const { product_id } = req.body;

    await contract.methods
        .getOwnerOfProduct(product_id)
        .call()
        .then((result) => {
            return res.status(200).json({
                message: `Retrived owner of Product Successfully, P_Id: ${product_id}`,
                result: result,
            });
        })
        .catch((err) => {
            return res.status(400).json({
                message: `Something went wrong while Retrived owner of Product  P_id: ${product_id}`,
                error: err,
            });
        });
};

// getOwnerOfProduct(product.id);

const verifyOwnershipBCN = async (req, res) => {
    let { product_id, owner_id } = req.body;

    if (product_id === undefined) product_id = req.query.product_id;
    if (owner_id === undefined) owner_id = req.query.owner_id;

    await contract.methods
        .verifyOwnership(product_id, owner_id)
        .call()
        .then((result) => {
            return res.status(200).json({
                message: `Recived Verification Data Successfully, P_ID: ${product_id}, O_ID: ${owner_id}`,
                result: result,
            });
        })
        .catch((err) => {
            return res.status(400).json({
                message: `Something went wrong while verifying Data, P_ID: ${product_id}, O_ID: ${owner_id}`,
                error: err,
            });
        });
};

module.exports = {
    sellProductsBCN,
    addProductBCN,
    getOwnerOfProductBCN,
    verifyOwnershipBCN,
    sellProductToCustomerBCN,
};
