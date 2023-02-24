import Head from 'next/head'
import '../styles/global.scss'
import '../styles/react-calendar.scss'
import { ClientLayout } from './layout/client-layout'
import { Providers } from './layout/providers'

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
