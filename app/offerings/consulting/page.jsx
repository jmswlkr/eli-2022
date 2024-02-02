import { draftMode } from 'next/headers'

import { useContentful } from '@/utils/contentful/useContentful'

import { ComingSoon } from '@/ui-components/coming-soon/coming-soon'
import { CtaSection } from '@/ui-components/cta-section/cta-section'
import { HeroSecondary } from '@/ui-components/hero/secondary'

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