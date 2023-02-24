'use client'

import { useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const Providers = ({ children }) => {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 20 * 1000,
          refetchOnWindowFocus: false,
        },
      },
    })
  )

  return (
    <QueryClientProvider client={queryClient.current}>
      {children}
    </QueryClientProvider>
  )
}
