import { z } from 'zod'

export const messageShema = () => z.object({
  content: z.string().min(10, "content must be 10 charater")
    .max(100, "content no longer than 100")
})