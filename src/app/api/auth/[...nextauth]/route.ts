// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { NextAuthOptions } from "next-auth";
// import { compare } from "bcryptjs";
// import { signJwt, verifyJwt } from "@/lib/auth"; // You need to implement these helpers

// export const authOptions: NextAuthOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "email" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 // Replace this with your user lookup logic
//                 const user = await getUserByEmail(credentials?.email || "");
//                 if (user && await compare(credentials!.password, user.password)) {
//                     return { id: user.id, email: user.email, name: user.name };
//                 }
//                 return null;
//             },
//         }),
//     ],
//     session: {
//         strategy: "jwt",
//     },
//     jwt: {
//         async encode({ token, secret }) {
//             return signJwt(token, secret);
//         },
//         async decode({ token, secret }) {
//             return verifyJwt(token, secret);
//         },
//     },
//     pages: {
//         signIn: "/auth/signin",
//     },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

// // Helper: Replace with your actual user lookup
// async function getUserByEmail(email: string) {
//     // Example: fetch user from DB
//     // return await db.user.findUnique({ where: { email } });
//     return null;
// }

const test = "test";