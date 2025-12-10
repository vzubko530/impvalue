import mongoose, { models, Schema, Types } from 'mongoose';

interface ProductModel {
  _id: Types.ObjectId;
  title: string;
  description: string;
  price: number;
  category: Types.ObjectId;
  subcategory: Types.ObjectId;
  seller: Types.ObjectId;
}

const ProductSchema = new Schema<ProductModel>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  subcategory: {
    type: mongoose.Types.ObjectId,
    ref: 'Subcategory',
    required: true,
  },
  seller: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default models.Product ||
  mongoose.model<ProductModel>('Product', ProductSchema);
