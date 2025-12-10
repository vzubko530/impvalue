import mongoose, { models, Schema, Types } from 'mongoose';

interface UserModel {
  _id: Types.ObjectId;
  email: string;
  password: string;
  username: string;
}

const UserSchema = new Schema<UserModel>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

export default models.User || mongoose.model<UserModel>('User', UserSchema);
