import { z } from 'zod';

export const CreateProductSchema = z.object({
  title: z
    .string()
    .min(14, 'Minimum 14 characters')
    .max(100, 'Maximum 100 characters'),
  description: z
    .string()
    .min(30, 'Minimum 30 charachers')
    .max(1000, 'Maximum 1000 charachers'),
  price: z.coerce
    .number()
    .positive()
    .max(100_000_000)
    .refine((val) => /^\d+(\.\d{1,2})?$/.test(val.toString()), {
      message: 'Maximum 2 decimal places',
    }),
});

export type CreateProductSchemaType = z.infer<typeof CreateProductSchema>;
