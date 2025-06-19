// import jwt from 'jsonwebtoken';

 
// const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
// const JWT_EXPIRES_IN = '1h';

// export function signJwt(payload: object, options?: jwt.SignOptions): string {
//     return jwt.sign(payload, JWT_SECRET, {
//         expiresIn: JWT_EXPIRES_IN,
//         ...options,
//     });
// }

// export function verifyJwt<T>(token: string): T | null {
//     try {
//         return jwt.verify(token, JWT_SECRET) as T;
//     } catch (error) {
//         return null;
//     }
// }


const auth = "test auth"
console.log(auth)