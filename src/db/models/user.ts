import { model, Model, Schema } from 'mongoose';

/**
 * Represents a user.
 * @interface
 */
export interface IUser {
  name: string;
  email: string;
  image?: string;
}

/**
 * Represents the schema for the User model.
 *
 * @typedef {import('mongoose').Schema} Schema
 * @typedef {import('mongoose').Document} Document
 * @typedef {{ name: string, email: string, image?: string }} IUser
 *
 * @type {Schema<IUser, Document>}
 */
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
