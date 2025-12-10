import mongoose, { models, Schema, Types } from 'mongoose';

interface SubcategoryModel {
  _id: Types.ObjectId;
  name: string;
  slug: string;
  category: Types.ObjectId;
}

const SubcategorySchema = new Schema<SubcategoryModel>({
  name: {
    type: String,
    required: true,
    unique: this,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

export default models.Subcategory ||
  mongoose.model<SubcategoryModel>('Subcategory', SubcategorySchema);
