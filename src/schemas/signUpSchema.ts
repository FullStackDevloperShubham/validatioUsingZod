import { z } from 'zod'

export const usernameValidation = z
  .string()
  .min(2, "user name must be at least 2 characters")
  .max(30, "user name must be at least 30 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "user not must not conntain contain")




export const signupSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "invalid email address" }),
  password: z.string().min(6, "password must be at least 6 characters")
})