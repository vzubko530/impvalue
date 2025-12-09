import { z } from 'zod';

export const SignupSchema = z
  .object({
    email: z.string().email('Invalid email adress'),
    username: z
      .string()
      .min(5, 'Username must be at least 5 characters')
      .max(14, 'Username must be maximum 14 characters'),
    password: z.string().min(8, 'Password must be at leats 8 characters'),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword'],
  });

export type SugnupSchemaType = z.infer<typeof SignupSchema>;
