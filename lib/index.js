"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoJS = require("crypto-js");
var key = CryptoJS.enc.Latin1.parse("Ys4AVoKchlXQ79E1");
var iv = CryptoJS.enc.Latin1.parse("cDOiBC1n2QrkAY2P");
var options = {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
};
/**
 * 加密
 * @param data // 加密的值
 */
function encrypted(data) {
    var encode = CryptoJS.AES.encrypt(data, key, options);
    return encode;
}
exports.encrypted = encrypted;
/**
 * 解密
 * @param encode // 加密后的值
 */
function decrypted(encode) {
    var decode = CryptoJS.AES.decrypt(encode, key, options);
    return decode.toString(CryptoJS.enc.Utf8);
}
exports.decrypted = decrypted;
//# sourceMappingURL=index.js.map