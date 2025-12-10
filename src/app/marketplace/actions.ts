'use server';

import { connectDB } from '@/lib/mongodb';
import { CategoryDTO } from '@/dtos/Category';
import { revalidatePath } from 'next/cache';
import Category from '@/models/Category';

export async function createCategoryAction(data: CategoryDTO) {
  await connectDB();

  const { slug } = data;

  const exist = await Category.findOne({ slug });

  if (exist) {
    return {
      error: `Category with slug "${slug}" already exists`,
      status: 409,
    };
  }

  const newCategory = await Category.create(data);

  revalidatePath('/marketplace');
  revalidatePath('/products');

  return {
    category: JSON.parse(JSON.stringify(newCategory)),
    status: 201,
  };
}
