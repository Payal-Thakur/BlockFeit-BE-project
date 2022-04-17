const { mysqlConnection } = require("../database-connection/mysqlConfig");
const { vendorQueries } = require("../utilities/queries");
const { generateKeys } = require("../utilities/keyGeneration");

const vendorRegistration = (req, res) => {
  const {
    vendor_name,
    vendor_email,
    vendor_mobile_no,
    vendor_city,
    vendor_state,
    vendor_password,
    vendor_shop_name,
  } = req.body;

  const { publicKey, privateKey } = generateKeys();

  const query = vendorQueries.vendorRegistration;

  mysqlConnection.query(
    query,
    [
      privateKey,
      publicKey,
      vendor_name,
      vendor_email,
      vendor_mobile_no,
      vendor_city,
      vendor_state,
      vendor_password,
      vendor_shop_name,
    ],
    (err, result, fields) => {
      if (!!err) {
        return res.status(400).json({
          msg: "Something went wrong while Registration",
          err: err,
        });
      }

      return res.status(200).json({
        message: `You have registered successfully for Vendorship.
                        soon your Request will be accept by manufacturere. T&C*
                    `,
        "your Keys": {
          privateKey: privateKey,
          publicKey: publicKey,
        },
      });
    }
  );
};

const getVendorByVendorID = (req, res, next) => {
  const vendor_id =
    req.body.vendor_id === undefined ? req.query.id : req.body.vendor_id;
  const query = vendorQueries.getVendorById;

  mysqlConnection.query(query, [vendor_id], (error, result, fields) => {
    if (!!error) {
      return res.status(400).json({
        message: `Something went while getting Vedor by ID: ${vendor_id}`,
        error: error,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: `No Vedor exist for Public key ${vendor_id}`,
      });
    }

    req.vendor = result[0];
    next();
  });
};

const getVendorByID = (req, res) => {
  if (req.vendor === undefined) {
    return res.status(404).json({
      message: `No Vedor exist for Public key ${vendor_id}`,
    });
  }

  return res.status(400).json({
    message: "Successfully retrived vendor",
    vendor: req.vendor,
  });
};

const requestProductToManufacturer = (req, res) => {
  const { quantity, vendor_id } = req.body;
  const query = vendorQueries.requestProductToManufacturer;

  mysqlConnection.query(
    query,
    [quantity, vendor_id],
    (error, result, fields) => {
      if (!!error) {
        return res.status(400).json({
          message: `Something went while getting Requesting products vendor id : ${vendor_id}`,
          error: error,
        });
      }

      return res.status(200).json({
        message: `Successfully requested ${quantity} to manifacturer`,
      });
    }
  );
};

const sellProductToCustomer = (req, res, next) => {
  const { vendor_id, customer_public_key } = req.body;

  const query = vendorQueries.sellProductToCustomer;

  mysqlConnection.query(
    query,
    [vendor_id, customer_public_key],
    (error, result, field) => {
      if (!!error) {
        return res.status(400).json({
          message: `Something went while getting selling products to customer`,
          error: error,
        });
      }

      next();
    }
  );
};

module.exports = {
  vendorRegistration,
  getVendorByVendorID,
  requestProductToManufacturer,
  sellProductToCustomer,
  getVendorByID,
};
