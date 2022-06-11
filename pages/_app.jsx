// External lib
import React from 'react'

// Components
import { Layout } from '@/layout/layout.jsx'

// Styling
import '../styles/global.scss'



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
