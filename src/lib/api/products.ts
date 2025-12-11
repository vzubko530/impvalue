import { connectDB } from '../mongodb';
import '@/models/User';
import Product from '@/models/Product';
import Subcategory from '@/models/Subcategory';
import { ProductDTO, SellerProductDTO } from '@/dtos/Product';
import Category from '@/models/Category';

export async function getProductsBySubcategorySlug(
  subcategorySlug: string,
): Promise<ProductDTO[]> {
  await connectDB();

  if (!subcategorySlug) {
  }

  const subcategory = await Subcategory.findOne({
    slug: subcategorySlug,
  }).lean();

  const products = await Product.find({
    subcategory: subcategory._id,
  })
    .populate('seller')
    .lean();

  return products;
}

export async function getProductById(_id: string): Promise<ProductDTO> {
  await connectDB();

  const product = await Product.findOne({ _id });

  return product;
}
