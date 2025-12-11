'use server';

import { CreateProductDTO } from '@/dtos/Product';
import { connectDB } from '@/lib/mongodb';
import Category from '@/models/Category';
import Product from '@/models/Product';
import Subcategory from '@/models/Subcategory';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function createProductAction(product: CreateProductDTO) {
  await connectDB();

  const cookiesStore = await cookies();

  const authToken = cookiesStore.get('auth_token')?.value;

  if (!authToken) {
    throw new Error('No auth');
  }

  const decoded = jwt.verify(authToken, process.env.JWT_SECRET!) as {
    _id: string;
  };
  const sellerId = decoded._id;

  const { title, description, price, categorySlug, subcategorySlug } = product;

  const category = await Category.findOne({ slug: categorySlug });

  if (!category) {
  }

  const subcategory = await Subcategory.findOne({ slug: subcategorySlug });

  if (!subcategory) {
  }

  const newProduct = await Product.create({
    title,
    description,
    price,
    category: category._id,
    subcategory: subcategory._id,
    seller: sellerId,
  });

  return {
    _id: newProduct._id,
  };
}
