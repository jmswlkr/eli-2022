import React from 'react'

import { Layout } from 'components/layout/layout.jsx'

import '../styles/global.scss'
import '../styles/react-calendar.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
