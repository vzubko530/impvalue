import Product from '@/models/Product';
import { connectDB } from '../mongodb';
import User from '@/models/User';
import { UserDTO } from '@/dtos/User';

export async function getSellerByProductId(_id: string): Promise<UserDTO> {
  await connectDB();

  const product = await Product.findOne({ _id });

  const user = await User.findOne({ _id: product.seller });

  return user;
}
