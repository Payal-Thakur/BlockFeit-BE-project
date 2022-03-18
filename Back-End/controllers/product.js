const { mysqlConnection } = require("../database-connection/mysqlConfig")
const { productQueries } = require("../utilities/queries")
const { generateKeys } = require("../utilities/keyGeneration");





const addProduct = (req, res, next) => {


    const { publicKey } = generateKeys();
    const {
        product_name ,
        product_description,
        product_height,
        product_width,
        product_manufactured_date,
        product_size,
        product_batch,
        product_owner_id ,
        product_manufacturer } = req.body;

        req.product_key = publicKey;

    const query = productQueries.addProduct;

    console.log("Got Body : " + req.body);

    mysqlConnection.query(query, [
        publicKey,
        product_name ,
        product_description,
        product_height,
        product_width,
        product_manufactured_date,
        product_size,
        product_batch,
        product_manufacturer], (err, result, fields) => {

            if(!!err) {

                return res.status(400).json({

                    message : "Something went wrong while adding product",
                    err : err
                });
            }

            req.DB_RES = {

                message : " Product added successfully ",
                "product key" : publicKey
            }
            next();
    });
}

const productHistory = (req, res) => {

    const query = productQueries.productHistory;
    const id = req.query.product_id.trim();

    console.log("product id : ", id)

    mysqlConnection.query(query, [id], (err, result) => {

        if(!!err) {

            return res.status(400).json({

                message: "Something went wrong getting prouct History",
                error: err
            });
        }

        return res.status(200).json({

            message: "Successfully retrived product history",
            history: result
        });
    });
}

const userProductHistory = (req, res) => {

    const query = productQueries.userTransaction;
    const id = req.query.id.trim();

    mysqlConnection.query(query, [id, id], (err, result) => {

        if(!!err) {

            return res.status(400).json({

                message: "Something went wrong getting User History",
                error: err
            });
        }

        return res.status(200).json({

            message: "Successfully retrived User history",
            history: result
        });
    });

}

module.exports = {

    addProduct,
    productHistory,
    userProductHistory
}









