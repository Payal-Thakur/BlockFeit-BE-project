/*const { generateKeyPair } = require('crypto');
generateKeyPair('rsa', {
  modulusLength: 512,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    // cipher: 'aes-256-cbc',
    // passphrase: 'hii'
  }
}, (err, publicKey, privateKey) => {
  // Handle errors and use the generated key pair.

    if(err)
        console.log("error while generating keys : ", err);
    else {
        console.log("public key : ", publicKey);
        console.log("private key : ", privateKey);

    }

});
*/

var crypto = require('crypto');

var prime_length = 60;

for(var i = 0; i < 5; i++) {
var diffHell = crypto.createDiffieHellman(prime_length);

  diffHell.generateKeys('base64');
// console.log("Public Key : " ,diffHell.getPublicKey('base64'));
// console.log("Private Key : " ,diffHell.getPrivateKey('base64'));

console.log("Public Key : " ,diffHell.getPublicKey('hex'));
console.log("Private Key : " ,diffHell.getPrivateKey('hex'));
}