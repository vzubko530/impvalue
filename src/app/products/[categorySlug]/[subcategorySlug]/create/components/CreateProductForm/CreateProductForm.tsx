'use client';

import { Button, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import styles from './CreateProductForm.module.css';
import {
  CreateProductSchema,
  CreateProductSchemaType,
} from '@/lib/validation/product';
import { zodResolver } from '@hookform/resolvers/zod';
import { createProductAction } from '../../actions';
import { CreateProductDTO } from '@/dtos/Product';
import { useRouter } from 'next/navigation';

interface CreateProductFormProps {
  categorySlug: string;
  subcategorySlug: string;
}

const CreateProductForm = ({
  categorySlug,
  subcategorySlug,
}: CreateProductFormProps) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(CreateProductSchema),
  });

  const handleCreateProduct = async (data: CreateProductSchemaType) => {
    const { title, description, price } = data;

    const newProduct = await createProductAction({
      title,
      description,
      price,
      categorySlug: categorySlug,
      subcategorySlug: subcategorySlug,
    });

    const { _id } = newProduct;

    router.push(`/products/${_id}`);
  };

  return (
    <form
      onSubmit={handleSubmit(handleCreateProduct)}
      className={styles.create_product_form}
    >
      <Stack spacing={4}>
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          size="small"
          {...register('title')}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          size="small"
          multiline
          rows={10}
          {...register('description')}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <TextField
          fullWidth
          label="Price"
          variant="outlined"
          size="small"
          {...register('price', {
            onChange: (e) => {
              let v = e.target.value;
              v = v.replace(/[^\d.]/g, '');
              v = v.replace(/(\..*)\./g, '$1');
              v = v.replace(/^0+(\d)/, '$1');
              e.target.value = v;
            },
          })}
          error={!!errors.price}
          helperText={errors.price?.message}
        />
        <Button variant="outlined" type="submit" loading={isSubmitting}>
          Create product
        </Button>
      </Stack>
    </form>
  );
};

export default CreateProductForm;
