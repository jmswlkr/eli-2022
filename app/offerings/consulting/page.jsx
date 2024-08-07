import { draftMode } from 'next/headers'

import { useContentful } from '@/contentful'

import { HeaderParagraph } from '@/ui-components'
import { CtaSection } from '@/ui-components'
import { HeroSecondary, ReadbleContent } from '@/ui-components'

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
        <ReadbleContent>
          <div className='MAIN_CONTENT flex-col-tl gap-md'>
            {content.mainContent.map((block) => {
              return (
                <HeaderParagraph
                  key={block.sys.id}
                  mainContentHeading={block.fields.heading}
                  mainContentParagraph={block.fields.paragraph}
                  classes={{
                    wrapper: '!gap-ms',
                    content: '!gap-ms'
                  }}
                />
              )
            })}
          </div>
          <div className='LIST_CONTENT flex-col-tl gap-md'>
            {content.listContent.map((block) => {
              return (
                <div
                  key={block.sys.id}
                  className='LIST_ITEM border-primary-500 flex-col-tl gap-ms bg-primary-100 p-md border-l-2 rounded-r-lg'
                >
                  <HeaderParagraph
                    mainContentHeading={block.fields.heading}
                    mainContentParagraph={block.fields.paragraph}
                    classes={{
                      wrapper: '!gap-ms',
                      content: '!gap-ms'
                    }}
                  />
                </div>
              )
            })}
          </div>
        </ReadbleContent>
      </div>
      <CtaSection {...content.cta.fields} />
    </>
  )
}

export default OrganizationalConsultingPage
