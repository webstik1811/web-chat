import { IUser, userModelSchema } from '@db/models/user';
import { model, Model, Schema } from 'mongoose';

export interface IChatItem {
  msg: string;
  user: IUser;
  createdAt: string;
}

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
