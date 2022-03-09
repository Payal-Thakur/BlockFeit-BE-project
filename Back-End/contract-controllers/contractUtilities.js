const { json } = require("body-parser");
const {   web3,
    contract,
    defaultAccount
} = require("../ganache-connection/web3Config");

const DEFAULT_ACCOUNT = "0x729d40954040cA2CD715e875bc74C2fD810bD64B";
const GAS = "6721975";
const GAS_PRICE = "30000000";


const { generateKeys } = require("../utilities/keyGeneration")


async function addManufacturerIntoContactBCN () {

    await contract
        .methods
        .addManufacturer("IT Shoes", "NAshik", "WE are Only one")
        .send({from : "0x13A6B9ABaE0C991a0be790B7e0601720E55fBC85"})
        .then( res => {
            console.log("Resut after setting Val : "  + JSON.stringify(res));
        });

        await contract.methods.getManufacture().call().then(res => {

            console.log("get Manu Detail: ", res) 
        });
}

const addRetailerBCN = (req, res) => {


    const {  vendor_id,
        vendor_name,
        vendor_mobile_no,
        vendor_email,
        vendor_city
       } = req.vendor;

       console.log(`BCN Retailer : ${JSON.stringify(req.vendor)}`)
     contract
        .methods
        .addRetailer(
            "vendor_id",
            "vendor_name",
            "vendor_mobile_no",
            "vendor_email",
            "vendor_city")
        .send({from : "0x729d40954040cA2CD715e875bc74C2fD810bD64B", gas: 6721975, gasPrice: '30000000'})
        .then( result => {


            result.logsBloom = undefined;
            return res.status(200).json({

                message: "Retailer Added Successfully",
                Result : result,
                vendor_id: vendor_id
            });
        });
}


const addCustomerBCN = (req, res) => {

    const {
        customer_name,
        customer_email,
        customer_phone_no
    } = req.body;

    const {customer_publicKey, 
        customer_privateKey } = req;

        console.log(`Private key : ${customer_privateKey}, Public key : ${customer_publicKey}`)

    contract
    .methods
    .addCustomer(customer_publicKey,
        customer_name,
        customer_phone_no,
        customer_email)
    .send({from : DEFAULT_ACCOUNT, gas: 6721975, gasPrice: '30000000'})
    .then( result => {
        return res.status(200).json({

            DB_MSG : req.DB_MSG,
            bc_message: "Customer Added Successfully",
            bc_esult : result,
        });
    })
    .catch(err => {

        return res.status(400).json({

           
            message: "Someting went wrong while",
            error: err
        });
    });
}

const sellProductsToRetailerBCN = async (req, res) => {

    const { vendor_id, quantity } = req.body;

    await contract
    .methods
    .sellProductsToRetailer(vendor_id, quantity)
    .send({from : DEFAULT_ACCOUNT, gas: GAS, gasPrice: GAS_PRICE})
    .then( result => {
    
        return res.status(200).json({

            message : `Product sold Successfully to Retailer, id : ${vendor_id}, quantity : ${quantity}`,
            result: result
        });
    })
    .catch(err => {

        return res.status(400).json({

            message : `Something Went wrong while sending products to Retailer, id : ${vendor_id}, quantity : ${quantity}`,
            error: err
        });

    });

}

// sellProductsToRetailer(retailer.id, 1);

const sellProductToCustomerBCN = async (req, res) => {


    const { vendor_id, customer_public_key } = req.body;

    await contract
    .methods
    .sellProductToCustomer(vendor_id, customer_public_key)
    .send({from : DEFAULT_ACCOUNT, gas: GAS, gasPrice: GAS_PRICE})
    .then( result => {
        
        return res.status(200).json({

            message: `Product sent successfully, V -> C, From ${vendor_id} to ${customer_public_key }`,
            result : result
        });
    })
    .catch(err => {

        return res.status(400).json({

            message: `Something went wrong while selling V -> C, From ${seller_id} to ${customer_id }`,
            err : err
        });
    });
}


const addProductBCN = (req, res) => {

    
    const id = req.product_key;
    const {
        product_name,
        product_width,
        product_height,
        product_manufactured_date,
        product_batch ,
        product_owner_id } = req.body;

    contract
    .methods
    .addProduct(id,
        product_name,
        product_width,
        product_height,
        product_manufactured_date,
        product_batch,
        product_owner_id)
    .send({from : DEFAULT_ACCOUNT, gas: GAS, gasPrice: GAS_PRICE})
    .then( result => {

        result.logsBloom = undefined;
        return res.status(200).json({

            db_result : req.DB_RES,
            bc_result : {
                message: "Product Added Successfully",
                Result : result,
                _id: id
            }
        });
    })
    .catch(err => {
        return res.status(400).json({

            message: "Something went wrong while adding Product",
            error: err,
        });
    });
}


const getProductDetailBCN = async (req, res) => {

    const { product_id } = req.body;
    await contract
    .methods
    .getProductDetail(product_id)
    .call()
    .then( result => {
        return res.status(200).json({

            message: "Recived Prodct Successfully",
            result : result
        });
    })
    .catch(err => {

        return res.status(200).json({

            message: "Someting went wrong while getting product details",
            error: err
        });
    });
}

// getProductDetail(product.id);


const getRetailerProductCountBCN = async (req, res) => {


    const { retailer_id } = req.body;

    await contract
    .methods
    .getRetailerProductCount(retailer_id)
    .call()
    .then( result => {
       
        return res.status(200).json({

            message : `Retrived Vendor Detail Successfully, V_ID: ${retailer_id}`,
            result: result
        });
    })
    .catch(err => {

        return res.status(400).json({

            message : `Something went wrong while getting Vendor Detail V_id: ${retailer_id}`,
            error : err
        });

    });

}

// getRetailerProductCount(retailer.id);

const getCustomerProductCountBCN = async (req, res) => {

    const { customer_id } = req.body;

    await contract
    .methods
    .getCustomerProductCount(customer_id)
    .call()
    .then( result => {
       
        return res.status(200).json({

            message : `Retrived Customer Product count Successfully, C_ID: ${ customer_id }`,
            result: result
        });
    })
    .catch(err => {

        return res.status(400).json({

            message : `Something went wrong while getting Customer Product count C_id: ${ customer_id }`,
            error : err
        });

    });
}


const getManufacturerCountBCN = async () => {

    await contract
    .methods
    .getManufacturerCount()
    .call()
    .then(result => {
       
        return res.status(200).json({

            message : `Retrived Manufacturer Product count Successfully`,
            result: result
        });
    })
    .catch(err => {

        return res.status(400).json({

            message : `Something went wrong while getting Manufacturer Product count`,
            error : err
        });

    });
}

// getManufacturerCount();

const getRetailerDetailsBCN = async (req, res) => {

    const { id } = req.body;

    await contract
        .methods
        .getRetailerDetails(id)
        .call()
        .then( result => {
       
            return res.status(200).json({
    
                message : `Retrived Vendor Details Successfully, V_ID: ${ id }`,
                result: result
            });
        })
        .catch(err => {
    
            return res.status(400).json({
    
                message : `Something went wrong while getting  Vendor Details Detail V_id: ${ id }`,
                error : err
            });
        });
}

// getRetailerDetails(retailer.id);


const getOwnerOfProductBCN = async (req, res) => {

    const { product_id } = req.body;

    await contract
    .methods
    .getOwnerOfProduct(product_id)
    .call()
    .then( result => {
       
        return res.status(200).json({

            message : `Retrived owner of Product Successfully, P_Id: ${ product_id }`,
            result: result
        });
    })
    .catch(err => {

        return res.status(400).json({

            message : `Something went wrong while Retrived owner of Product  P_id: ${ product_id }`,
            error : err
        });

    });
}

// getOwnerOfProduct(product.id);

const verifyOwnershipBCN = async (req, res) => {

    const { product_id, owner_id } = req.body;

    await contract
    .methods
    .verifyOwnership(product_id, owner_id)
    .call()
    .then( result => {
       
        return res.status(200).json({

            message : `Recived Verification Data Successfully, P_ID: ${product_id}, O_ID: ${ owner_id }`,
            result: result
        });
    })
    .catch(err => {

        return res.status(400).json({

            message : `Something went wrong while verifying Data, P_ID: ${product_id}, O_ID: ${ owner_id }`,
            error : err
        });

    });
}


module.exports = {

    addManufacturerIntoContactBCN,
    addRetailerBCN,
    addCustomerBCN,
    sellProductsToRetailerBCN,
    sellProductToCustomerBCN,
    addProductBCN,
    getProductDetailBCN,
    getRetailerProductCountBCN,
    getCustomerProductCountBCN,
    getManufacturerCountBCN,
    getRetailerDetailsBCN,
    getOwnerOfProductBCN,
    verifyOwnershipBCN
}





