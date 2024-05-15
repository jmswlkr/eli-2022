import { HeaderParagraph } from '@/ui-components'

export const Intro = ({ mainContent }) => {
  return (
    <div className='READABLE_WRAP flex-col-center'>
      <div className='READABLE_CONTENT w-[var(--reading-content-width)] flex-col-tl gap-xl'>
        <div className='MAIN_CONTENT flex-col-tl gap-md lg:gap-lg'>
          {mainContent.map((block) => {
            return (
              <HeaderParagraph
                key={block.sys.id}
                mainContentHeading={block.fields?.heading}
                mainContentParagraph={block.fields.paragraph}
                classes={{ wrapper: '!gap-ms', content: '!gap-ms' }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
