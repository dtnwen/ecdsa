const secp = require("ethereum-cryptography/secp256k1");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

const privateKey = secp.utils.randomPrivateKey()
const publicKey = secp.getPublicKey(privateKey, false)
const address = keccak256(publicKey).slice(-20)

console.log(privateKey)
console.log('prtivate key: ', toHex(privateKey))
console.log('public key: ', toHex(publicKey))
console.log('address: ', toHex(address))
