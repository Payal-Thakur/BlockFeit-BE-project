// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BlockFeit {
    // product structure
    struct Product {
        string id;
        string name;
        string width;
        string height;
        string time_stamp;
        string batch;
        string ownwer;
    }

    // Customer/User structure
    struct Customer {
        string id;
        string name;
        string phone_no;
        string email;
        Product[] purchesed;
    }

    // Retailer
    struct Retailer {
        string id;
        string name;
        string phone_no;
        string email;
        string location;
        uint256 remaining;
        uint256 sold;
        Product[] available;
        bool present;
    }

    // manufacturer Details
    string public brand;
    string public location;
    uint256 total_manufacturered;
    string private manufacturer;

    // Contract variables
    uint256 indx;
    Product tempProduct;
    Retailer tempRetailer;
    Customer tempCustomer;
    Product[] tempProducts;
    Product[] manufacturered;

    uint256 public val = 10;

    function setVal(uint256 _x) public {
        val = _x;
    }

    // mapping
    mapping(string => Customer) customers;
    mapping(string => Retailer) retailers;
    mapping(string => Product) productMapping;

    // initialize Contract
    constructor() public {
        total_manufacturered = 0;
        indx = 0;
    }

    /*
        this fuction set manufacturer into system
        @params= _manufacturer name, location, brand
    */
    function addManufacturer(
        string memory _manufacturer,
        string memory _location,
        string memory _brand
    ) public {
        manufacturer = _manufacturer;
        location = _location;
        brand = _brand;
    }

    function getManufacture()
        public
        view
        returns (
            string memory,
            string memory,
            string memory
        )
    {
        return (manufacturer, location, brand);
    }

    /*
        This function add Vendor/ Retailer into system
        Expects Retailer details as parameters
        @params= id, name, phone_no, email, location
    */
    function addRetailer(
        string memory _id,
        string memory _name,
        string memory _phone_no,
        string memory _email,
        string memory _location
    ) public {
        tempRetailer.id = _id;
        tempRetailer.name = _name;
        tempRetailer.phone_no = _phone_no;
        tempRetailer.email = _email;
        tempRetailer.location = _location;
        tempRetailer.present = true;
        retailers[_id] = tempRetailer;
    }

    /*
        This function add Customer/user into system
        Expects Customer details as parameters
        @params= id, name, phone_no, email
    */
    function addCustomer(
        string memory _id,
        string memory _name,
        string memory _phone_no,
        string memory _email
    ) public {
        tempCustomer.id = _id;
        tempCustomer.name = _name;
        tempCustomer.phone_no = _phone_no;
        tempCustomer.email = _email;
        delete tempCustomer.purchesed;
        customers[_id] = tempCustomer;
    }

    /*
        This function sells product to Vendor/Retailer by manufacturer
        Expects Retailer id and Quantity as parameters
        @params= _id, _quantity 
    */
    string MSG = "Retailer Does not Exist";

    function sellProductsToRetailer(string memory _id, uint256 _quantity)
        public
        returns (string memory)
    {
        Retailer memory retailer = retailers[_id];
        if ((_quantity + indx) > manufacturered.length) {
            MSG = "Insufficient products";
            return (MSG);
        } else if (retailer.present == false) {
            return (MSG);
        }

        delete tempRetailer.available;

        tempRetailer.id = retailer.id;
        tempRetailer.name = retailer.name;
        tempRetailer.phone_no = retailer.phone_no;
        tempRetailer.email = retailer.email;
        tempRetailer.location = retailer.location;
        tempRetailer.present = true;

        for (uint256 tt = 0; tt < retailer.available.length; tt++) {
            Product memory p = retailer.available[tt];
            tempRetailer.available.push(p);
        }

        for (uint256 i = 0; i < _quantity; i++) {
            // Product memory present = retailer.available[i];
            Product memory present = manufacturered[indx];
            present.ownwer = _id;
            productMapping[present.id].ownwer = _id;
            indx++;
            tempRetailer.available.push(present);
        }
        retailers[_id] = tempRetailer;
        MSG = "Productes Added successfully";
        return MSG;
    }

    /*
        This function sells product to Customer  by Vendor/Retailer 
        Expects Retailer id and customer_id as parameters
        @params= _seller_id, _customer_id
    */
    function sellProductToCustomer(
        string memory _seller_id,
        string memory _customer_id
    ) public {
        delete tempRetailer.available;
        tempRetailer = retailers[_seller_id];
        delete tempCustomer.purchesed;
        tempCustomer = customers[_customer_id];
        tempProduct = tempRetailer.available[0];

        for (uint256 i = 0; i < tempRetailer.available.length - 1; i++) {
            tempRetailer.available[i] = tempRetailer.available[i + 1];
        }

        tempRetailer.available.pop();
        retailers[_seller_id] = tempRetailer;
        productMapping[tempProduct.id].ownwer = _customer_id;
        customers[_customer_id].purchesed.push(tempProduct);
    }

    /*
        This function add product into system
        Expects product details as parameters
        @params= id, name, width, height, time_stamp, batch, owner
    */
    function addProduct(
        string memory _id,
        string memory _name,
        string memory _width,
        string memory _height,
        string memory _time_stamp,
        string memory _batch,
        string memory _owner
    ) public {
        Product memory product;
        product.id = _id;
        product.name = _name;
        product.width = _width;
        product.height = _height;
        product.time_stamp = _time_stamp;
        product.batch = _batch;
        product.ownwer = _owner;

        total_manufacturered++;
        productMapping[_id] = product;
        manufacturered.push(product);
    }

    /*
        @params : product id
        returns product info
        id, owner, name, width, height, time_stamp, batch
    */
    function getProductDetail(string memory _product_id)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        return (
            productMapping[_product_id].id,
            productMapping[_product_id].name,
            productMapping[_product_id].ownwer,
            productMapping[_product_id].width,
            productMapping[_product_id].height,
            productMapping[_product_id].time_stamp,
            productMapping[_product_id].batch
        );
    }

    /*
        Function name : getRetailerProductCount
        @params : retailer_id
        returns how many products are availabe to vendor
    */
    function getRetailerProductCount(string memory _retailer_id)
        public
        view
        returns (uint256)
    {
        return (retailers[_retailer_id].available.length);
    }

    /*
        Function name : getCustomerProductCount
        @params : customer_id
        returns how many products purched by customer
    */
    function getCustomerProductCount(string memory _customer_id)
        public
        view
        returns (uint256)
    {
        return (customers[_customer_id].purchesed.length);
    }

    /*
        Function name : getManufacturerCount
        @params :none
        returns how many products availabe to manufacturer
    */
    function getManufacturerCount() public view returns (uint256) {
        return (total_manufacturered - indx);
    }

    /*
        function name : getRetailerDetails
        @params : retailer_id
        returns retailer info
        like : id, name, phone_no, email, location, products available
    */
    function getRetailerDetails(string memory retailer_id)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            uint256
        )
    {
        return (
            retailers[retailer_id].id,
            retailers[retailer_id].name,
            retailers[retailer_id].phone_no,
            retailers[retailer_id].email,
            retailers[retailer_id].location,
            retailers[retailer_id].available.length
        );
    }

    /*
       fuction name: getOwnerOfProduct
        Expected product_id as parameters
        @params= product_id
        returns product name and product owner

    */

    function getOwnerOfProduct(string memory product_id)
        public
        view
        returns (string memory, string memory)
    {
        return (
            productMapping[product_id].name,
            productMapping[product_id].ownwer
        );
    }

    /*
        This function verify ownership of produt
        Expected product id, owner id ad parameters
        @params= product_id, owner_id
        returns Boolean value if ownership matched with product owner
    */
    function verifyOwnership(string memory product_id, string memory owner_id)
        public
        view
        returns (bool)
    {
        return (keccak256(bytes(productMapping[product_id].ownwer)) ==
            keccak256(bytes(owner_id)));
    }
}
