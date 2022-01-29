// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BlockFeit {

    struct Product {

        string id;
        string name;
        string width;
        string height;
        string time_stamp;
        string batch;
        string ownwer;
    }

    struct Customer {

        string id;
        string name;
        string phone_no;
        string email;
        Product[] purchesed;
    }

     struct Retailer {

        string id;
        string name;
        string phone_no;
        string email;
        string location;
        uint remaining;
        uint sold;
        Product[] available;
        bool present;
    }

    address private manufacturer;
    string location;
    uint total_manufacturered;
    Retailer tempRetailer;
    Customer tempCustomer;
    Product[] tempProducts;
    uint indx;
    Product[] manufacturered;
    
    mapping(string => Product) productMapping;
    mapping(string => Customer) customers;
    mapping(string => Retailer) retailers;

    constructor(address _manufacturer) public{

        manufacturer = _manufacturer;
        total_manufacturered = 0;
        indx = 0;
    }

      modifier restricted() {
        require(msg.sender == manufacturer);
        _;
    }

/*
        string id;
        string name;
        string width;
        string heigh;
        string time_stamp;
        string batch;
        string ownwer;
*/
    function addProduct(string memory _id, 
                        string memory _name, 
                        string memory _width, 
                        string memory _height,
                        string memory _time_stamp,
                        string memory _batch,
                        string memory _owner
                        ) public restricted {

            Product memory product;
            product.id = _id;
            product.name = _name;
            product.width = _width;
            product.height = _height;
            product.time_stamp = _time_stamp;
            product.batch = _batch;
            product.ownwer = _owner;

            productMapping[_id] = product;
            manufacturered.push(product);
    }


    function getProductDetail(string _id) public view returns(string memory, string memory, string memory) {

        return(productMapping[_id].id, productMapping[_id].name, productMapping[_id].ownwer);
    }

    /*
        string id;
        string name;
        string phone_no;
        string email;
        string location;
        uint remaining;
        uint sold;
        Product[] available;
    */

/*
 struct Customer {

        string id;
        string name;
        string phone_no;
        string email;
        Product[] purchesed;
    }
*/

    function addCustomer(string memory _id,
                        string memory _name,
                        string memory _phone_no,
                        string memory _email
                        ) public {

            tempCustomer.id = _id;
            tempCustomer.name = _name;
            tempCustomer.phone_no = _phone_no;
            tempCustomer.email = _email;
            delete tempCustomer.purchesed;
            customers[_email] = tempCustomer;
    }


  



    string MSG = "Retailer Does not Exist";
    function sellProductsToRetailer (string memory _id, uint _quantity)  public restricted returns(string memory) {
      
        Retailer memory retailer = retailers[_id];
        if((_quantity+indx) > manufacturered.length) {

            MSG = "Insufficient products";
            return (MSG);
        }
        else if(retailer.present == false) {

            return (MSG);
        }

        delete tempRetailer.available;
        
        
        tempRetailer.id = retailer.id;
        tempRetailer.name = retailer.name;
        tempRetailer.phone_no = retailer.phone_no;
        tempRetailer.email = retailer.email;
        tempRetailer.location = retailer.location;
        tempRetailer.present = true;

        for(uint tt = 0; tt < retailer.available.length;  tt++) {

            Product memory p = retailer.available[tt];
            tempRetailer.available.push(p);
        }

        for(uint i = 0; i < _quantity; i++) {

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

   function addRetailer(string memory _id,
                        string memory _name,
                        string memory _phone_no,
                        string memory _email,
                        string memory _location) public  restricted {


            tempRetailer.id = _id;
            tempRetailer.name = _name;
            tempRetailer.phone_no = _phone_no;
            tempRetailer.email = _email;
            tempRetailer.location = _location;
            tempRetailer.present = true;

            retailers[_id] = tempRetailer;
    }





    function getRetailerDetails(string memory _id) public view returns(string memory, string memory, string memory, uint) {


        return(retailers[_id].name, retailers[_id].email, retailers[_id].location, retailers[_id].available.length);

    }


  function getOwnerOfProduct(string memory _id) public view returns(string memory, string memory) {

        return(productMapping[_id].name, productMapping[_id].ownwer);

    }


    function verifyOwnership(string memory owner_id) public view returns(bool) {

        return(keccak256(bytes(productMapping[owner_id].ownwer)) == keccak256(bytes(owner_id)));

    }





} 

/*

typeError: Type struct memory is not implicitly convertible to expected type struct storage pointer.


*/
