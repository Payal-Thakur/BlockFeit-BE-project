require("dotenv").config();
let Web3 = require("web3");
let { ABI, contractAddress } = require("./readABI");
let URL = process.env.GANACHE_SERVER || "HTTP://127.0.0.1:7545"; 

let web3 = new Web3(new Web3.providers.HttpProvider(URL));
let contract = new web3.eth.Contract(ABI, contractAddress);


if(web3)
    console.log("Ganache connected successfully \nLocation: ", __dirname);
else
    console.log("Something went wrong while connection Ganache  \nLocation: ", __dirname);

if(contract) 
    console.log("Contract executed successfully \nLocation: ", __dirname)
else 
    console.log("Something went wrong while executing smart contract  \nLocation: ", __dirname);


module.exports = {
    web3,
    contract
}