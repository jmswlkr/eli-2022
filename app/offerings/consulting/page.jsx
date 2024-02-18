import { draftMode } from 'next/headers'

import { useContentful } from '@/contentful'

import { ComingSoon, HeaderParagraph, TestComponent } from '@/ui-components'
import { CtaSection } from '@/ui-components'
import { HeroSecondary } from '@/ui-components'

import { PAGE_CONFIG } from './page-config'

const OrganizationalConsultingPage = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled
  })

  return (
    <>
      <HeroSecondary {...content.hero.fields} />
      <div className='READABLE_WRAP flex-col-center'>
        <div className='READABLE_CONTENT w-[var(--reading-content-width)] flex-col-tl gap-xxl'>
          <div className='MAIN_CONTENT flex-col-tl gap-lg'>
            {content.mainContent.map((block) => {
              return (
                <HeaderParagraph
                  key={block.sys.id}
                  mainContentHeading={block.fields.heading}
                  mainContentParagraph={block.fields.paragraph}
                  classes={{ wrapper: '!gap-ms', content: '!gap-ms' }}
                />
              )
            })}
          </div>
          <div className="LIST_CONTENT flex-col-tl gap-md">
            {content.listContent.map((block) => {
              return (
                <div key={block.sys.id}className='LIST_ITEM border-l-2 border-primary-500 rounded-r-lg flex-col-tl gap-ms bg-primary-100 p-md'>
                  <HeaderParagraph
                    mainContentHeading={block.fields.heading}
                    mainContentParagraph={block.fields.paragraph}
                    classes={{ wrapper: '!gap-ms', content: '!gap-ms' }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <CtaSection {...content.cta}/>
    </>
  )
}

export default OrganizationalConsultingPage
