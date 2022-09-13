import React from 'react'

import { ScheduleProvider } from '@/context/schedule-context'

import { Layout } from 'components/layout/layout.jsx'

import '../styles/global.scss'
import '../styles/react-calendar.scss'



function MyApp({ Component, pageProps }) {
  return (
    <ScheduleProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ScheduleProvider>
  )
}

export default MyApp
