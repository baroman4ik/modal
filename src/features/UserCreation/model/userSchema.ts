import { z } from 'zod'

export const userSchema = z.object({
  name: z.string().min(2, 'Имя должно включать Как минимум 2 символа'),
  email: z.string().email('Некорректный email'),
  password: z.string().min(6, 'Пароль должен включать как минимум 6 символов'),
})
