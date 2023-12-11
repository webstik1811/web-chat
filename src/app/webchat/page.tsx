import Chat from '@components/Chat/Chat';
import { serverClient } from '@containers/trpc/serverClient';
import { IChatItem } from '@db/models/chat-items';
import { IUser } from '@db/models/user';
import { authOptions } from '@libs/auth';
import { serializeMongooseObject } from '@libs/utils';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function WebChat() {
  const session = await getServerSession(authOptions) as {user: IUser}

  if (!session) {
     redirect('/login');
  }


  const data = await serverClient.chatItems.list();
  const initialChatItems: IChatItem[] = data.map(item => serializeMongooseObject(item));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
        <Chat initialChatItems={initialChatItems} user={session?.user}/>
      </div>
    </main>
  );
}



