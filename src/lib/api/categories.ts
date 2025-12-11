import { CategoryDTO, CategoryWithSubsDTO } from '@/dtos/Category';
import { cache } from 'react';
import { connectDB } from '../mongodb';
import Category from '@/models/Category';
import Subcategory from '@/models/Subcategory';
import { SubcategoryDTO } from '@/dtos/Subcategory';

export const getCategories = async (): Promise<CategoryWithSubsDTO[]> => {
  await connectDB();

  const categories = await Category.find({}).lean<CategoryDTO[]>();

  const results = await Promise.all(
    categories.map(async (category) => {
      const subcategories = await Subcategory.find({
        category: category._id,
      }).lean<SubcategoryDTO[]>();

      return {
        ...category,
        subcategories,
      };
    }),
  );

  return results;
};

export async function getCategoryBySlug(slug: string): Promise<CategoryDTO> {
  await connectDB();

  const category = await Category.findOne({ slug }).lean();

  return category;
}
