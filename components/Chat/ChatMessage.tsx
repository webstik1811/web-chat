'use client'
import { IChatItem } from '@db/models/chat-items';
import { IUser } from '@db/models/user';
import clsx from 'clsx';
import TimeAgo from 'timeago-react';

/**
 * Renders a chat message based on the given item and user.
 *
 * @param {Object} params - The parameters for the chat message.
 * @param {Object} params.item - The chat item object.
 * @param {Object} params.user - The user object.
 * @param {string} params.user.email - The email of the user.
 *
 * @return {JSX.Element} - The chat message component.
 */
export default function ChatMessage({ item, user }: {
  item: IChatItem,
  user: IUser
}) {
  const isMe = user.email === item.user?.email;
  const {msg, createdAt } = item;

  return (
    <>
      <div className={clsx('flex w-full mt-2 space-x-3 max-w-xs',{
        'ml-auto justify-end': isMe
      })}>
        <div>
          <span className={clsx('text-xs', {
            'text-black': !isMe,
            'text-blue-500 leading-none': isMe
          })}>{item.user?.email}</span>
          <div className={clsx('p-3', {
            'bg-gray-300 rounded-r-lg rounded-bl-lg': !isMe,
            'bg-blue-600 text-white rounded-l-lg rounded-br-lg': isMe
          })}>
            <p className="text-sm">{msg}</p>
          </div>
            <TimeAgo
              className="text-xs text-gray-500 leading-none"
            datetime={createdAt}
          />
        </div>
      </div>
    </>
  );
}
