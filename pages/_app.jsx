// External lib
import React from 'react'

// Internal lib
import { ScheduleProvider } from '@/context/schedule-context'

// Components
import { Layout } from 'components/layout/layout.jsx'

// Styling
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
