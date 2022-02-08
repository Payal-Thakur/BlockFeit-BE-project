const userQueries = {

    addNewUser : `INSERT INTO customer (customer_private_key, 
                customer_public_key, 
                customer_name, 
                customer_email,
                customer_phone_no,
                customer_city,
                customer_state,
                customer_type,
                customer_password) values(?, ?, ?, ?, ?, ?, ?, ?, ?);`,
    getCustomerUsingEmail: "SELECT * FROM customer WHERE customer_email = ? LIMIT 1",
    reportProuct: `INSERT INTO report (reporter_public_key, reported_product_id, report_details) values(?, ?, ?)`,
}



const productQueries = {

    /*product_id
    product_name 
    product_description
    product_height
    product_width
    product_manufactured_date
    product_size
    product_batch
    product_owner_id 
    product_manufacturer*/

    addProduct : ` INSERT INTO product values( ?, ?, ?, ?, ?, STR_TO_DATE(?, '%d-%m-%Y'),  ?, ?, ?, ?);`
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

    vendorRegistration : `
    
        INSERT INTO vendor_requested(vendor_private_key,
            vendor_public_key,
            vendor_name,
            vendor_email,
            vendor_mobile_no,
            vendor_city,
            vendor_state,
            vendor_password,
            vendor_shop_name ) values(?, ?, ?, ?, ?, ?, ?, ?, ?);`,


}

const manufacturerQueries = {

    getAllRequestedVendors : `select * from vendor_requested;`,
    getAllReports: `select * from report`,

} 


module.exports = {
    userQueries,
    productQueries,
    vendorQueries,
    manufacturerQueries
}
