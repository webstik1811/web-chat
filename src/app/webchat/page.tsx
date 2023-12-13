import Chat from '@components/Chat/Chat';
import { MainLogout } from '@components/Logout/MainLogout';
import { serverClient } from '@containers/trpc/serverClient';
import ChatItemModel, { IChatItem } from '@db/models/chat-items';
import { IUser } from '@db/models/user';
import { authOptions } from '@libs/auth';
import { serializeMongooseObject } from '@libs/utils';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

/**
 * Initializes the web chat application.
 * @returns {HTMLElement} The root element of the web chat application.
 */
export default async () => {
  const session = await getServerSession(authOptions) as {user: IUser}

  if (!session) {
     redirect('/login');
  }

  const data: typeof ChatItemModel[] = await serverClient.chatItems.list();
  const initialChatItems: IChatItem[] = data.map(item => serializeMongooseObject(item));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="absolute top-2.5 right-2.5"><MainLogout/></div>
      <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
        <Chat initialChatItems={initialChatItems} user={session?.user}/>
      </div>
    </main>
  );
}



