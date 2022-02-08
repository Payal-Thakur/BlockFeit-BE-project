const { mysqlConnection } = require("../database-connection/mysqlConfig")
const { manufacturerQueries } = require("../utilities/queries");


const requestedVendor = (req, res) => {


    const query = manufacturerQueries.getAllRequestedVendors;

    mysqlConnection.query(query, (err, result, fields) => {

        if(!!err) {

            return res.status(400).json({

                message: "Something went wrong while getting All vendors",
                error: err
            });
        }
        result.map(vendor => {

            vendor.vendor_private_key = undefined;
            vendor.vendor_password = undefined;
        });

        return res.status(200).json({

            message: "Successfully retrived all Requested Vendors!!",
            vendors : result
        });

    });
}

const getAllReports = (req, res) => {

    const query = manufacturerQueries.getAllReports;

    mysqlConnection.query(query, (err, result, fields) => {

        if(!!err) {

            return res.status(400).json({

                message: "Something went wrong while getting all Reports",
                error: err
            });
        }

        return res.status(200).json({

            message: "Successfully retrived all Reports!!",
            Reports : result
        });

    });

}


module.exports = {

    requestedVendor,
    getAllReports
    
}