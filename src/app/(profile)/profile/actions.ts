'use server';

import { SellerProductDTO } from '@/dtos/Product';
import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';

export async function getProductsBySeller(
  myid: string,
): Promise<SellerProductDTO> {
  await connectDB();

  console.log('idididid', myid);

  const result = await Product.aggregate([
    { $match: { seller: myid } },
    // {
    //   $lookup: {
    //     from: 'categories',
    //     localField: 'category',
    //     foreignField: '_id',
    //     as: 'category',
    //   },
    // },
    // { $unwind: '$category' },
    // {
    //   $lookup: {
    //     from: 'subcategories',
    //     localField: 'subcategory',
    //     foreignField: '_id',
    //     as: 'subcategory',
    //   },
    // },
    // { $unwind: '$subcategory' },
    // {
    //   $group: {
    //     _id: {
    //       categoryId: '$category._id',
    //       categoryName: '$category.name',
    //       categorySlug: '$category.slug',

    //       subcatId: '$subcategory._id',
    //       subcatName: '$subcategory.name',
    //       subcatSlug: '$subcategory.slug',
    //     },
    //     products: {
    //       $push: {
    //         _id: '$_id',
    //         title: '$title',
    //         description: '$description',
    //         price: '$price',
    //         category: '$category._id',
    //         subcategory: '$subcategory._id',
    //       },
    //     },
    //   },
    // },
    // {
    //   $group: {
    //     _id: {
    //       id: '$_id.categoryId',
    //       name: '$_id.categoryName',
    //       slug: '$_id.categorySlug',
    //     },
    //     subcategories: {
    //       $push: {
    //         _id: '$_id.subcatId',
    //         name: '$_id.subcatName',
    //         slug: '$_id.subcatSlug',
    //         products: '$products',
    //       },
    //     },
    //   },
    // },
    // {
    //   $project: {
    //     _id: '$_id.id',
    //     name: '$_id.name',
    //     slug: '$_id.slug',
    //     subcategories: 1,
    //   },
    // },
  ]);

  console.log(result);

  return {
    categories: result,
  };
}
