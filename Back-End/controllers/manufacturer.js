const { mysqlConnection } = require("../database-connection/mysqlConfig");
const { manufacturerQueries, vendorQueries } = require("../utilities/queries");

const requestedVendor = (req, res) => {
  const query = manufacturerQueries.getAllRequestedVendors;

  mysqlConnection.query(query, (err, result, fields) => {
    if (!!err) {
      return res.status(400).json({
        message: "Something went wrong while getting All vendors",
        error: err,
      });
    }
    result.map((vendor) => {
      vendor.vendor_private_key = undefined;
      vendor.vendor_password = undefined;
    });

    return res.status(200).json({
      message: "Successfully retrived all Requested Vendors!!",
      vendors: result,
    });
  });
};

const getAllReports = (req, res) => {
  const query = manufacturerQueries.getAllReports;

  mysqlConnection.query(query, (err, result, fields) => {
    if (!!err) {
      return res.status(400).json({
        message: "Something went wrong while getting all Reports",
        error: err,
      });
    }

    return res.status(200).json({
      message: "Successfully retrived all Reports!!",
      Reports: result,
    });
  });
};

const approveVendorRequest = (req, res, next) => {
  const { vendor_id } = req.body;
  const query = vendorQueries.approveVendor;

  mysqlConnection.query(query, [vendor_id], (error, result, fields) => {
    if (!!error) {
      return res.status(400).json({
        message: `Something went while approving Vedor, Vendor ID${vendor_public_key}`,
        error: error,
      });
    }

    next();
  });
};

const productRequestedVenodr = (req, res) => {
  const query = vendorQueries.productRequestedByVendor;

  mysqlConnection.query(query, (error, result, message) => {
    if (!!error) {
      return res.status(400).json({
        message: `Something went while getting product requests`,
        error: error,
      });
    }

    return res.status(200).json({
      message: "Successfully retrived all Requested Retailers!!",
      result: result,
    });
  });
};

const sellProuctToVendor = (req, res, next) => {
  const { quantity, vendor_id } = req.body;
  const query = manufacturerQueries.sellProductToVendor;
  mysqlConnection.query(query, [quantity, vendor_id], (error, result) => {
    if (!!error) {
      return res.status(400).json({
        message: `Something went while selling products to vendor : ${vendor_id}`,
        error: error,
      });
    }

    next();
  });
};

const manufacturerDetails = (req, res) => {
  const id = req.query.m_id;
  const query = manufacturerQueries.getManufacturerDetails;

  mysqlConnection.query(query, [id], (error, result, fields) => {
    if (!!error) {
      return res.status(400).json({
        message: `Something went while getting manus data`,
        error: error,
      });
    }

    return res.status(200).json({
      message: "Successfully retrived all manu Details!!",
      result: result,
    });
  });
};

module.exports = {
  requestedVendor,
  approveVendorRequest,
  getAllReports,
  productRequestedVenodr,
  sellProuctToVendor,
  manufacturerDetails,
};
