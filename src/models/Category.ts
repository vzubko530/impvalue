import mongoose, { models, Schema, Types } from 'mongoose';

interface CategoryModel {
  _id: Types.ObjectId;
  name: string;
  slug: string;
}

const CategorySchema = new Schema<CategoryModel>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

export default models.Category ||
  mongoose.model<CategoryModel>('Category', CategorySchema);
