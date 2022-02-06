let fs = require("node:fs");

var ABI = undefined
var contractAddress = undefined;
var byteCode = undefined;

    let contract = fs.readFileSync("./build/contracts/BlockFeit.json");
    let contractObject = JSON.parse(contract);
    ABI = contractObject.abi;
    let contractDeployment = Object.keys(contractObject.networks)
    contractAddress = contractObject.networks[contractDeployment[contractDeployment.length-1]];

    byteCode = contractObject.bytecode;
    contractAddress = contractAddress.address;

    // console.log("ABI : ", contractObject);
    console.log("contract Address : ", contractAddress);
    if(typeof ABI == undefined || ABI.length == 0)
        console.log("Something went wrong while reading ABI in ", __dirname)
    else
        console.log("successfully retrived ABI");
    if(typeof contractAddress == undefined || contractAddress.length == 0)
        console.log("Something went wrong while reading contract addrees in ", __dirname)
    else 
        console.log("successfully retrived contract Address");

module.exports = {
    ABI,
    contractAddress,
    byteCode
};
