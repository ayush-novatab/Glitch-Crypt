/**
 * Crypto Module - Handles encryption and decryption operations
 */
export class CryptoManager {
    constructor() {
        this.salt = "p2pGlitchCrypt";
    }

    /**
     * Encrypt text using XOR cipher with salted key
     * @param {string} text - Text to encrypt
     * @param {string} key - Encryption key
     * @returns {string} - Base64 encoded encrypted text
     */
    encrypt(text, key) {
        if (!text) return '';

        let result = '';
        const saltedKey = key + this.salt + key.length;

        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            const keyChar = saltedKey.charCodeAt(i % saltedKey.length);
            const encryptedCharCode = charCode ^ keyChar;
            result += String.fromCharCode(encryptedCharCode);
        }

        return btoa(result).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    }

    /**
     * Decrypt text using XOR cipher with salted key
     * @param {string} encryptedText - Base64 encoded encrypted text
     * @param {string} key - Decryption key
     * @returns {string} - Decrypted text
     */
    decrypt(encryptedText, key) {
        if (!encryptedText) return '';

        try {
            const paddedText = encryptedText.replace(/-/g, '+').replace(/_/g, '/');
            const padding = paddedText.length % 4;
            const normalizedText = padding ? 
                paddedText + '='.repeat(4 - padding) : 
                paddedText;

            let decodedText = atob(normalizedText);
            const saltedKey = key + this.salt + key.length;
            let result = '';

            for (let i = 0; i < decodedText.length; i++) {
                const charCode = decodedText.charCodeAt(i);
                const keyChar = saltedKey.charCodeAt(i % saltedKey.length);
                const decryptedCharCode = charCode ^ keyChar;
                result += String.fromCharCode(decryptedCharCode);
            }

            return result;
        } catch (e) {
            console.error('Decryption error:', e);
            return 'Error: Invalid encrypted text or wrong key';
        }
    }
} 