import * as CryptoJS from 'crypto-js'

const key = CryptoJS.enc.Latin1.parse("Ys4AVoKchlXQ79E1")
const iv = CryptoJS.enc.Latin1.parse("cDOiBC1n2QrkAY2P")

const options = {
  iv,
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.ZeroPadding
}

/**
 * 加密
 * @param data // 加密的值
 */
export function encrypted(data) {
  const encode = CryptoJS.AES.encrypt(data, key, options)
  return encode
}

/**
 * 解密
 * @param encode // 加密后的值
 */
export function decrypted(encode) {
  const decode = CryptoJS.AES.decrypt(encode, key, options)
  return decode.toString(CryptoJS.enc.Utf8)
}
