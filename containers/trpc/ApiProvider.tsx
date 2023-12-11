'use client';
import { getBaseUrl } from '@libs/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import React, { useState } from 'react';
import { trpc } from './client';

const TRPC_API_URL = `${getBaseUrl()}/api/trpc`;

/**
 * This module defines the `ApiProvider` component, a higher-order component
 * that sets up the tRPC and React Query clients for a React application.
 * It is used to provide a global configuration for API calls and data fetching
 * throughout the application.
 *
 * The tRPC client is configured with an HTTP batch link to optimize network requests,
 * and the React Query client is used for managing server state.
 *
 * `TRPC_API_URL` is constructed using the base URL of the application, ensuring
 * the tRPC client points to the correct endpoint for server-side procedures.
 *
 * Props:
 * - `children`: The child components of the ApiProvider. These children will
 *   have access to the tRPC and React Query contexts.
 *
 * Usage:
 * Wrap your application or a part of your application with the `ApiProvider`
 * to provide global access to the tRPC and React Query functionalities.
 *
 * Example:
 * ```
 * <ApiProvider>
 *   <YourApp />
 * </ApiProvider>
 * ```
 *
 * @module ApiProvider
 */
export default function ApiProvider({children}: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: TRPC_API_URL,
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
