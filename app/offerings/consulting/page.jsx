import { draftMode } from 'next/headers'

import { useContentful } from '@/utils'

import { ComingSoon } from '@/ui-components'
import { CtaSection } from '@/ui-components'
import { HeroSecondary } from '@/ui-components'

import { PAGE_CONFIG } from './page-config'

const OrganizationalConsulting = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled
  })
  console.log('content from consulting page: ', content)

  return (
    <div>
      {/* <PageHero {...hero} /> */}
      <HeroSecondary {...content.hero.fields} />
      <ComingSoon />
      {/* <CtaSection {...cta}/> */}
    </div>
  )
}