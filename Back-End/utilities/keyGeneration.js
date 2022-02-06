var crypto = require('crypto');
var prime_length = 60;
var diffHell = crypto.createDiffieHellman(prime_length);

diffHell.generateKeys('base64');

const publicKey = () => diffHell.getPublicKey('hex');
const privateKey = () => diffHell.getPrivateKey('hex');


module.exports = {

    publicKey,
    privateKey
}

