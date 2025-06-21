export type SessionUser = {
  id: string
  name: string
  email: string
  role: "USER" | "ADMIN"
  status: "ACTIVE" | "INACTIVE" | "BANNED"
}
