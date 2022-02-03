


const userQueries = {

    addNewUser : `INSERT INTO customer (customer_private_key, 
                customer_public_key, 
                customer_name, 
                customer_email,
                customer_phone_no,
                customer_city,
                customer_state,
                customer_type,
                customer_password
) values(?, ?, ?, ?, ?, ?, ?, ?, ?);`,
    getCustomerUsingEmail: "SELECT * FROM customer WHERE customer_email = ? LIMIT 1"

}







module.exports = {
    userQueries
}
