const { mysqlConnection } = require("../database-connection/mysqlConfig");
const { vendorQueries } = require("../utilities/queries");
const { privateKey, publicKey } = require("../utilities/keyGeneration");


const vendorRegistration = (req, res) => {


    const {
        vendor_name,
        vendor_email,
        vendor_mobile_no,
        vendor_city,
        vendor_state,
        vendor_password,
        vendor_shop_name } = req.body;

        const _publicKey = publicKey();
        const _privateKey = privateKey();

        const query = vendorQueries.vendorRegistration;

        mysqlConnection.query(query, [
            _privateKey,
            _publicKey,
            vendor_name,
            vendor_email,
            vendor_mobile_no,
            vendor_city,
            vendor_state,
            vendor_password,
            vendor_shop_name], (err, result, fields) => {

                if(!!err) {

                    return res.status(400).json({

                        msg: "Something went wrong while Registration",
                        err: err
                    });
                }

                return res.status(200).json({

                    message: `You have registered successfully for Vendorship.
                        soon your Request will be accept by manufacturere. T&C*
                    `,
                });
        });




}



module.exports = {

    vendorRegistration
}