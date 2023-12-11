'use client'
import ChatMessage from '@components/Chat/ChatMessage';
import { trpc } from '@containers/trpc/client';
import { serverClient } from '@containers/trpc/serverClient';
import { IUser } from '@db/models/user';
import React, { useEffect, useRef, useState } from 'react';

export default function Chat({initialChatItems = [], user}: {
  initialChatItems: Awaited<ReturnType<(typeof serverClient)['chatItems']['list']>>,
  user: IUser
}) {
  const scrollRef = useRef<HTMLElement>(null);

  const [msg, setMsg] = useState<string>('');

  const getChatItems = trpc.chatItems.list.useQuery(undefined, {
    initialData: initialChatItems
  })

  useEffect(() => {
    if (getChatItems?.data?.length) {
      scrollRef.current?.scrollIntoView()
    }
  }, [getChatItems?.data?.length])

  useEffect(() => {
    const interval = setInterval(() => getChatItems.refetch(), 5000);

    return () => clearInterval(interval);
  }, []);

  const addChatItem = trpc.chatItems.add.useMutation({
    onSettled: () => {
      getChatItems.refetch();
    },
  })

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (msg === '') return

    addChatItem.mutate({ msg,  user });

    setMsg('')
  };

  return (
    <>
      <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
        {getChatItems?.data?.map((item) => {
          return (
            <ChatMessage key={item._id.toString()} item={item} user={user}/>
          )
        })}
        <span ref={scrollRef}/>
      </div>

      <div className="bg-gray-300 p-4">
        <form onSubmit={handleSubmit} className="flex flex-row">
            <input className="flex items-center h-10 w-full rounded px-3 text-sm"
                      onChange={(e) => setMsg(e.target.value)}
                      value={msg}
                      placeholder="Type your message…"></input>
          <button
            type="submit"
            className="ml-1 focus:shadow-outline hover:bg-green-800 h-10 px-5 text-white transition-colors duration-150 bg-green-700 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
