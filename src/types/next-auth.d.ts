import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      role: "USER" | "ADMIN"
      status: "ACTIVE" | "INACTIVE" | "BANNED"
    }
  }

  interface User {
    id: string
    name: string
    email: string
    role: "USER" | "ADMIN"
    status: "ACTIVE" | "INACTIVE" | "BANNED"
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: "USER" | "ADMIN"
    status: "ACTIVE" | "INACTIVE" | "BANNED"
  }
}
