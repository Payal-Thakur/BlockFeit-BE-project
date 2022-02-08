const {   web3,
    contract,
    defaultAccount
} = require("../ganache-connection/web3Config");

const retailer = {

    id: "ret-1",
    name: "Test Retailer",
    phone_no: "1234566",
    email : "BlockFeit",
    location : "Nashik"
};

const product = {

    id: "product-1",
    name: "Product name",
    width: "23 cm",
    height: "13 cm",
    time_stamp: "2-8-2022",
    batch: "2022",
    owner: "original manu"
}

async function addManufacturerIntoContact () {

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

const addRetailer = async (retailer) => {

    await contract
        .methods
        .addRetailer(retailer.id,
            retailer.name,
            retailer.phone_no, 
            retailer.email, 
            retailer.location)
        .send({from : "0x729d40954040cA2CD715e875bc74C2fD810bD64B", gas: 6721975, gasPrice: '30000000'})
        .then( res => {
            console.log(`Resut after Adding Retailer : `  + JSON.stringify(res));
        });
}

// addRetailer(retailer);

const addCustomer = async (customer) => {

    await contract
    .methods
    .addCustomer(customer.id,
        customer.name,
        customer.phone_no, 
        customer.email)
    .send({from : "0x729d40954040cA2CD715e875bc74C2fD810bD64B", gas: 6721975, gasPrice: '30000000'})
    .then( res => {
        console.log("Resut after Adding Customer : "  + JSON.stringify(res));
    });
}

const sellProductsToRetailer = async (seller_id, quantity) => {

    await contract
    .methods
    .sellProductsToRetailer(seller_id, quantity)
    .send({from : "0x729d40954040cA2CD715e875bc74C2fD810bD64B", gas: 6721975, gasPrice: '30000000'})
    .then( res => {
        console.log(`Resut after selling product to retailer :Seller id: ${seller_id}, Quantity : ${quantity} `  + JSON.stringify(res));
    });

}

// sellProductsToRetailer(retailer.id, 1);

const sellProductToCustomer = async (seller_id, customer_id) => {

    await contract
    .methods
    .sellProductToCustomer(seller_id, customer_id)
    .send({from : "0x729d40954040cA2CD715e875bc74C2fD810bD64B", gas: 6721975, gasPrice: '30000000'})
    .then( res => {
        console.log(`Resut after selling product to customer :Seller id: ${seller_id}, customer : ${customer_id} `  + JSON.stringify(res));
    });
}


const addProduct = async (product) => {

    await contract
    .methods
    .addProduct(product.id,
        product.name,
        product.width,
        product.height,
        product.time_stamp,
        product.batch,
        product.owner)
    .send({from : "0x729d40954040cA2CD715e875bc74C2fD810bD64B", gas: 6721975, gasPrice: '30000000'})
    .then( res => {
        console.log(`Resut after Adding Product: ${product} : \n`  + JSON.stringify(res));
    });
}

// addProduct(product);

const getProductDetail = async (product_id) => {
    await contract
    .methods
    .getProductDetail(product_id)
    .call()
    .then( res => {
        console.log(`getting product Detail for ${product_id} : `  + JSON.stringify(res));
    });
}

getProductDetail(product.id);


const getRetailerProductCount = async (retailer_id) => {

    await contract
    .methods
    .getRetailerProductCount(retailer_id)
    .call()
    .then( res => {
        console.log(`getRetailerProductCount for ${retailer_id} : `  + JSON.stringify(res));
    });

}

// getRetailerProductCount(retailer.id);

const getCustomerProductCount = async (customer_id) => {

    await contract
    .methods
    .getCustomerProductCount(customer_id)
    .call()
    .then( res => {
        console.log(`getCustomerProductCount for ${customer_id} : `  + JSON.stringify(res));
    });
}


const getManufacturerCount = async () => {

    await contract
    .methods
    .getManufacturerCount()
    .call()
    .then( res => {
        console.log(`Total Manufacturer product Count  : `  + JSON.stringify(res));
    });
}

// getManufacturerCount();

const getRetailerDetails = async (id) => {

    await contract.methods.getRetailerDetails(id).call().then(res => {
        console.log(`Retailer Info for id: ${id}: `, res) 
    });
}

// getRetailerDetails(retailer.id);


const getOwnerOfProduct = async (product_id) => {

    await contract
    .methods
    .getOwnerOfProduct(product_id)
    .call()
    .then( res => {
        console.log(`Owner of Product ${product_id} : `  + JSON.stringify(res));
    });
}

getOwnerOfProduct(product.id);

const verifyOwnership = async (product_id, owner_id) => {

    await contract
    .methods
    .verifyOwnership(product_id, owner_id)
    .call()
    .then( res => {
        console.log(`verifyOwnership of product id : ${product_id}, owner_id : ${owner_id}`  + JSON.stringify(res));
    });
}


module.exports = {

    addManufacturerIntoContact,
    addRetailer,
    addCustomer,
    sellProductsToRetailer,
    sellProductToCustomer,
    addProduct,
    getProductDetail,
    getRetailerProductCount,
    getCustomerProductCount,
    getManufacturerCount,
    getRetailerDetails,
    getOwnerOfProduct,
    verifyOwnership
}





