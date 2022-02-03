require("dotenv").config();
let Web3 = require("web3");
let { ABI, contractAddress } = require("./readABI");
let URL = process.env.GANACHE_SERVER || "HTTP://127.0.0.1:7545"; 

let web3 = new Web3(new Web3.providers.HttpProvider(URL));
let contract = new web3.eth.Contract(ABI, contractAddress);
let defaultAccount = undefined;




web3.eth.getAccounts()
.then( accounts => {
    defaultAccount = accounts[0];
    console.log("Ganache Account : ");
    console.log(accounts);
    console.log("Ganache connected successfully \nLocation: ", __dirname);
})
.catch(err => {
    
    console.error(`Something went wrong while connection Ganache${err.message}  
    \nLocation: , ${__dirname}
    \n IS YOUR GANACHE OPEN?`);
});




module.exports = {
    web3,
    contract,
    defaultAccount
}