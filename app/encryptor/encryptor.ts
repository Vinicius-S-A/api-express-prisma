// import { createCipheriv, createDecipheriv } from 'crypto';

// class AESCipher {
//     static key: Buffer = Buffer.from(process.env.AESC_SECRET, 'hex');
//     static iv: Buffer = Buffer.from(process.env.AESC_IV, 'hex');

//     async encrypt(text: any) {
//         try {            
//             const cipher = createCipheriv('aes-256-cbc', AESCipher.key, AESCipher.iv);
//             let encrypted = cipher.update(text, 'utf8', 'hex');
//             encrypted += cipher.final('hex');
//             return encrypted;
//         } catch (error) {
//             console.error('Encriptação falhou:', error);
//             throw error;
//         }
//     }

//     async decrypt(encryptedData: any) {
//         try {
//             const decipher = createDecipheriv('aes-256-cbc', AESCipher.key, AESCipher.iv);
//             let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
//             decrypted += decipher.final('utf8');
//             return decrypted;
//         } catch (error) {
//             console.error('Desencriptação failed:', error);
//             throw error;
//         }
//     }
// }

// export default new AESCipher();