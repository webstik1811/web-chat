'use client'
import { IChatItem } from '@db/models/chat-items';
import { IUser } from '@db/models/user';
import clsx from 'clsx';
import { useState } from 'react';
import TimeAgo from 'timeago-react';

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
