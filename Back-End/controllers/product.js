const { mysqlConnection } = require("../database-connection/mysqlConfig")
const { productQueries } = require("../utilities/queries")





const addProduct = (req, res) => {


    const { product_id,
        product_name ,
        product_description,
        product_height,
        product_width,
        product_manufactured_date,
        product_size,
        product_batch,
        product_owner_id ,
        product_manufacturer } = req.body;

    const query = productQueries.addProduct;

    mysqlConnection.query(query, [product_id,
        product_name ,
        product_description,
        product_height,
        product_width,
        product_manufactured_date,
        product_size,
        product_batch,
        product_owner_id ,
        product_manufacturer], (err, result, fields) => {

            if(!!err) {

                return res.status(400).json({

                    message : "Something went wrong while adding product",
                    err : err
                });
            }

            return res.status(200).json({

                message : " Product added successfully "
            });


    });


}

module.exports = {

    addProduct
}









