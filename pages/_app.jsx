import React, { useRef } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

import { Layout } from 'components/layout/layout.jsx'

import '../styles/global.scss'
import '../styles/react-calendar.scss'

function MyApp({ Component, pageProps }) {
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
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
