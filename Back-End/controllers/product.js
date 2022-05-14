const { mysqlConnection } = require("../database-connection/mysqlConfig");
const { productQueries } = require("../utilities/queries");
const { generateKeys } = require("../utilities/keyGeneration");

const addProduct = (req, res, next) => {
    const { publicKey } = generateKeys();
    const {
        product_name,
        product_description,
        product_height,
        product_width,
        product_manufactured_date,
        product_size,
        product_batch,
        product_owner_id,
        product_manufacturer,
    } = req.body;

    req.product_key = publicKey;

    const query = productQueries.addProduct;

    console.log("Got Body : " + req.body);

    mysqlConnection.query(
        query,
        [
            publicKey,
            product_name,
            product_description,
            product_height,
            product_width,
            product_manufactured_date,
            product_size,
            product_batch,
            product_manufacturer,
            product_owner_id,
        ],
        (err, result, fields) => {
            if (!!err) {
                return res.status(400).json({
                    message: "Something went wrong while adding product",
                    err: err,
                });
            }

            req.DB_RES = {
                message: " Product added successfully ",
                "product key": publicKey,
            };
            next();
        }
    );
};

const productHistory = (req, res) => {
    const query = productQueries.productHistory;
    const id = req.query.product_id.trim();

    console.log("product id : ", id);

    mysqlConnection.query(query, [id], (err, result) => {
        if (!!err) {
            return res.status(400).json({
                message: "Something went wrong getting prouct History",
                error: err,
            });
        }

        return res.status(200).json({
            message: "Successfully retrived product history",
            history: result,
        });
    });
};

const userProductHistory = (req, res) => {
    const query = productQueries.userTransaction;
    const id = req.query.id.trim();

    mysqlConnection.query(query, [id, id], (err, result) => {
        if (!!err) {
            return res.status(400).json({
                message: "Something went wrong getting User History",
                error: err,
            });
        }

        return res.status(200).json({
            message: "Successfully retrived User history",
            history: result,
        });
    });
};

const productOfOwner = (req, res, next) => {
    const owner_id =
        req.query.owner_id === undefined
            ? req.body.owner_id
            : req.query.owner_id;
    let limit =
        req.query.quantity === undefined ? undefined : req.query.quantity;
    limit = limit === undefined ? req.body.quantity : req.query.quantity;
    limit = limit === undefined ? 999 : limit;
    const query = productQueries.productOfOwner;

    limit = parseInt(limit, 10);
    mysqlConnection.query(query, [owner_id, limit], (err, result) => {
        if (!!err) {
            return res.status(400).json({
                message: "Something went wrong getting product of owners",
                error: err,
            });
        }

        req.products = result;

        next();
    });
};

const myProducts = (req, res) => {
    return res.status(200).json({
        message: "retrived all Products of owner",
        products: req.products,
    });
};

const transactionOfProduct = (pid, opk, bpk, tadd, status) => {
    const query = productQueries.transactionOfProduct;
    mysqlConnection.query(
        query,
        [pid, opk, bpk, tadd, status],
        (err, result) => {
            if (!!err) {
                console.log(
                    `Unable to add product transaction \n error : ${err.message}`
                );
            }
        }
    );
};

const sellProduct = (req, res, next) => {
    const products = req.products;
    if (products.length == 0) {
        return res.status(400).json({
            err: "No more products to Sell",
        });
    }

    const newOwnerID = req.body.customer_id;
    const query = productQueries.sellProduct;

    products.map((product) => {
        mysqlConnection.query(
            query,
            [newOwnerID, product.product_id],
            (error, result) => {}
        );
    });

    next();
};

const sellProductToCustomer = (req, res, next) => {
    const { product_id, owner_id, customer_id } = req.body;
    const query = productQueries.sellProductToCustomer;

    mysqlConnection.query(
        query,
        [customer_id, product_id, owner_id],
        (err, result) => {
            if (!!err) {
                return res.status(400).json({
                    err: "Unable to sell product",
                });
            }

            next();
        }
    );
};

const productById = (req, res) => {
    const product_id = req.query.product_id;
    const query = productQueries.productById;
    mysqlConnection.query(query, [product_id], (err, result) => {
        if (!!err) {
            return res.status(400).json({
                err: "Unable to get product by ID",
            });
        }

        return res.status(200).json({
            message: "Successfully retrived product",
            product: result[0],
        });
    });
};

module.exports = {
    addProduct,
    productHistory,
    userProductHistory,
    productOfOwner,
    sellProduct,
    transactionOfProduct,
    myProducts,
    sellProductToCustomer,
    productById,
};
