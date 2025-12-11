import { SubcategoryDTO } from '@/dtos/Subcategory';
import { connectDB } from '../mongodb';
import Subcategory from '@/models/Subcategory';
import Category from '@/models/Category';

export async function getSubcategoryBySlug(
  slug: string,
): Promise<SubcategoryDTO> {
  await connectDB();

  const subcategory = await Subcategory.findOne({ slug }).lean();

  return subcategory;
}

export async function getSubcategoriesByCategorySlug(
  slug: string,
): Promise<SubcategoryDTO[]> {
  await connectDB();

  const category = await Category.findOne({ slug }).lean();

  const subcategories = await Subcategory.find({
    category: category._id,
  }).lean();

  return subcategories;
}
