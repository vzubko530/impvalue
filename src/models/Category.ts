import mongoose, { models, Schema } from 'mongoose';

const CategorySchema = new Schema({
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

export default models.Category || mongoose.model('Category', CategorySchema);
