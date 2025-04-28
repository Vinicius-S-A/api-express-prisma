import { createCipheriv, createDecipheriv } from 'crypto';

class AESCipher {
    static envSecret: string = process.env.AESC_SECRET!;
    static envIv: string = process.env.AESC_IV!;

    static key: Buffer = Buffer.from(AESCipher.envSecret, 'hex');
    static iv: Buffer = Buffer.from(AESCipher.envIv, 'hex');

    constructor() { }

    async encrypt(text: string) {
        try {            
            const cipher = createCipheriv('aes-256-cbc', AESCipher.key, AESCipher.iv);

            let encrypted = cipher.update(text, 'utf8', 'hex');
            encrypted += cipher.final('hex');

            return encrypted;
        } catch (error) {
            console.error('Erro encrypt: ', error);

            throw error;
        }
    }

    async decrypt(encryptedData: string) {
        try {
            const decipher = createDecipheriv('aes-256-cbc', AESCipher.key, AESCipher.iv);
            
            let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
            decrypted += decipher.final('utf8');

            return decrypted;
        } catch (error) {
            console.error('Erro decrypt: ', error);
            
            throw error;
        }
    }
}

export default new AESCipher();