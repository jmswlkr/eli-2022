import NextTopLoader from 'nextjs-toploader'

import { ClientLayout } from './layout/client-layout'
import { Providers } from './(context)/providers'

import '../styles/_mixins.scss'
import '../styles/global.scss'
import '../styles/utils.scss'
import '../styles/variables.scss'
import '../styles/react-calendar.scss'
import '../styles/tailwind.typography.scss'
import '../styles/tailwind.utils.scss'

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <NextTopLoader />
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
