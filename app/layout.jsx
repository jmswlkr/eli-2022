import '../styles/_mixins.scss'
import '../styles/global.scss'
import '../styles/utils.scss'
import '../styles/variables.scss'
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
