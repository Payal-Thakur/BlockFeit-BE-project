// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BlockFeit {
    
    mapping(string => string) productMapping;

    function addProduct( string memory product_id, string memory new_seller ) public {
       
        productMapping[product_id] = new_seller;    
    }

    function sellProduct(string memory product_id, string memory new_seller) public{

        productMapping[product_id] = new_seller;
    }

    function getOwnerOfProduct(string memory product_id)
        public
        view
        returns (string memory, string memory)
    {
        return ( product_id, productMapping[product_id]);
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
        string memory owner = productMapping[product_id];
        return (keccak256(abi.encodePacked((owner))) ==
            keccak256(abi.encodePacked((owner_id))));
    }
}
