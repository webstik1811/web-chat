import { model, Model, Schema } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  image?: string;
}

export const userModelSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String
  }
}, {
  timestamps: true
})

let UserModel: typeof Model
try {
  UserModel = model('User', userModelSchema)
} catch (e) {
  UserModel = model('User');
}

export default UserModel;
