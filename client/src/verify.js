import * as secp from "ethereum-cryptography/secp256k1.js";
import { hexToBytes, toHex, utf8ToBytes } from "ethereum-cryptography/utils.js";
import { keccak256 } from "ethereum-cryptography/keccak.js";

function verify(address, privateKey) {
    let pbKey = secp.getPublicKey(hexToBytes(privateKey), false)
    if (`0x${toHex(keccak256(pbKey).slice(-20))}` == address) {
        return true
    } else return false
}

export default verify

