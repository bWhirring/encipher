import * as CryptoJS from 'crypto-js';
/**
 * 加密
 * @param data // 加密的值
 */
export declare function encrypted(data: any): CryptoJS.WordArray;
/**
 * 解密
 * @param encode // 加密后的值
 */
export declare function decrypted(encode: any): string;
