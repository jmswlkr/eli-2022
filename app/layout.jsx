import { draftMode } from 'next/headers'
import NextTopLoader from 'nextjs-toploader'

import { ClientLayout } from './layout/client-layout'
import { Providers } from './(context)/providers'

import { useManagedNavigation } from './layout/_hooks/useManagedNagivation'

import '../styles/_mixins.scss'
import '../styles/global.scss'
import '../styles/utils.scss'
import '../styles/variables.scss'
import '../styles/react-calendar.scss'
import '../styles/tailwind.typography.scss'
import '../styles/tailwind.utils.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/slick-slide.utils.scss'

const RootLayout = async ({ children }) => {
  const { isEnabled } = draftMode()

  const managedNavData = await useManagedNavigation(isEnabled)

  return (
    <html lang='en'>
      <body>
        <NextTopLoader showSpinner={false} color='var(--deep-blue)' />
        <Providers>
          <ClientLayout navData={managedNavData}>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
