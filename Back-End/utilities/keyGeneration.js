var crypto = require('crypto');
var prime_length = 60;


const generateKeys = () => {

    var diffHell = crypto.createDiffieHellman(prime_length);
    diffHell.generateKeys('base64');
    var privateKey = diffHell.getPrivateKey('hex');;
    var publicKey = diffHell.getPublicKey('hex');

    return {

        publicKey : publicKey,
        privateKey : privateKey
    };
}

module.exports = {
    generateKeys
}



