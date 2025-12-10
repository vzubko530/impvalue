import mongoose, { models, Schema } from 'mongoose';

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  print: {
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

export default models.Product || mongoose.model('Product', ProductSchema);
