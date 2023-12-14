import { IUser, userModelSchema } from '@db/models/user';
import { model, Model, Schema } from 'mongoose';

/**
 * Represents a chat item.
 *
 * @interface IChatItem
 */
export interface IChatItem {
  msg: string;
  user: IUser;
  createdAt: string;
}

/**
 * Represents the schema for a chat item model.
 * @typedef {Object} ChatItemModelSchema
 * @property {string} msg - The message content of the chat item.
 * @property {UserModelSchema} user - The user associated with the chat item.
 * @property {boolean} timestamps - Indicates whether timestamps should be enabled for the chat item.
 */
export const chatItemModelSchema = new Schema<IChatItem>({
  msg: {
    type: String,
    required: true
  },
  user: userModelSchema
}, {
  timestamps: true
})


let ChatItemModel: typeof Model
try {
  ChatItemModel = model('ChatItem', chatItemModelSchema)
} catch (e) {
  ChatItemModel = model('ChatItem')
}

export default ChatItemModel;
