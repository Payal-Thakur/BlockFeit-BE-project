const userQueries = {
    addNewUser: `INSERT INTO customer (customer_private_key, 
                customer_public_key, 
                customer_name, 
                customer_email,
                customer_phone_no,
                customer_city,
                customer_state,
                customer_type,
                customer_password) values(?, ?, ?, ?, ?, ?, ?, ?, ?);`,
    getCustomerUsingEmail:
        "SELECT * FROM customer WHERE customer_email = ? LIMIT 1",
    reportProuct: `INSERT INTO report (reporter_public_key, reported_product_id, report_details) values(?, ?, ?)`,
};

const productQueries = {
    addProduct: `INSERT INTO product values( ?, ?, ?, ?, ?, STR_TO_DATE(?, '%d-%m-%Y'),  ?, ?, ?, ?);`,
    productHistory: `SELECT * FROM product_history where product_id = ?`,
    productOfOwner: `select * from product where owner_id = ? limit ?`,

    sellProduct: ` update product set owner_id = ? where product_id = ?`,
    transactionOfProduct: `insert into product_history (
                            product_id, 
                            owner_public_key, 
                            buyer_public_key, 
                            transaction_address,
                            status) values (?,?,?,?,?)`,
    userTransaction: `select * from product_history where buyer_public_key = ? or owner_public_key = ?;`,
};

const vendorQueries = {
    /*
        vendor_private_key,
        vendor_public_key,
        vendor_name,
        vendor_email,
        vendor_mobile_no,
        vendor_city,
        vendor_state,
        vendor_password,
        vendor_shop_name
    */

    vendorRegistration: `
    
        INSERT INTO vendor_requested(vendor_private_key,
            vendor_public_key,
            vendor_name,
            vendor_email,
            vendor_mobile_no,
            vendor_city,
            vendor_state,
            vendor_password,
            vendor_shop_name ) values(?, ?, ?, ?, ?, ?, ?, ?, ?);`,

    getVendorByEmail: `select * from vendor where vendor_email = ?`,
    getVendorById: `Select * from vendor where vendor_id = ?;`,
    approveVendor: `call approve_vendor(?);`,

    productRequestedByVendor: `select vendor_id, vendor_name, vendor_public_key, vendor_quantity_requested, vendor_quantity_available ,vendor_quantity_sold from vendor where vendor_quantity_requested > 0;`,
    requestProductToManufacturer: `update vendor 
                                    set vendor_quantity_requested = vendor_quantity_requested + ? 
                                    where vendor_id = ?;`,

    sellProductToCustomer: `call UPDATE_VENDOR_PRODUCT_STATUS(?, ?)`,
};

const manufacturerQueries = {
    getAllRequestedVendors: `select * from vendor_requested;`,
    getAllReports: `select * from report`,
    sellProductToVendor: `call sell_product_to_vendor(?, ?);`,
    getManufacturerByEmail: `select * from manufacturer where manufacturer_email = ?`,
    getManufacturerDetails: `select * from manufacturer where manufacturer_id = ?`,
};

const contactUs = {
    getValues: "select * from contact",
    insertValues: "insert into contact(name, email, details) values (?, ?, ?)",
};

module.exports = {
    userQueries,
    productQueries,
    vendorQueries,
    manufacturerQueries,
    contactUs,
};
