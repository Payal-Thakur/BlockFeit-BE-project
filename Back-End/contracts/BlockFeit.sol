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
   
    Product[] manufacturered;
    Product[] tempProduct;
    mapping(string => Customer) customers;
    mapping(string => Retailer) retailers;

    constructor(address _manufacturer) public{

        manufacturer = _manufacturer;
        total_manufacturered = 0;
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

            manufacturered.push(product);
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

    function sellProductsToRetailer (string memory _id, uint _quantity)  public restricted returns (string memory) {

        
        string memory MSG = "Retailer Does not Exist";
        Retailer memory retailer = retailers[_id];
        if(_quantity > manufacturered.length) {

            MSG = "Insufficient products";
            return MSG;
        }
        else if(retailer.present == false) {

            return MSG;
        }

        Product memory temp;

        for(uint i = 0; i < _quantity; i++) {

            temp = manufacturered[i];
            tempProduct.push(temp);
        }

        uint size = manufacturered.length - _quantity;
        for(uint i = 0; i < size; i++) {

            manufacturered[i] =  manufacturered[i + _quantity];
        }
         for(uint i = 0; i < _quantity; i++) {

            manufacturered.pop();
        }

        retailer.available = tempProduct;
        retailers[_id] = retailer;
        delete tempProduct;

        MSG = "Productes Added successfully";
        return MSG;
    }

    function addRetailer(string memory _id,
                        string memory _name,
                        string memory _phone_no,
                        string memory _email,
                        string memory _location) public restricted {

            Retailer memory retailer;

            retailer.id = _id;
            retailer.name = _name;
            retailer.phone_no = _phone_no;
            retailer.email = _email;
            retailer.location = _location;
            retailer.present = true;

            retailers[_id] = retailer;
    }





} 


