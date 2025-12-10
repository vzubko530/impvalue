import mongoose, { models, Schema } from 'mongoose';

const SubcategorySchema = new Schema({
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
  mongoose.model('Subcategory', SubcategorySchema);
