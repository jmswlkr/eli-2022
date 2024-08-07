import { HeaderParagraph, ReadbleContent } from '@/ui-components'

export const Intro = ({ mainContent }) => {
  return (
    <div className='READABLE_WRAP flex-col-center'>
      <ReadbleContent>
        <div className='MAIN_CONTENT flex-col-tl gap-md lg:gap-md'>
          {mainContent.map((block) => {
            return (
              <HeaderParagraph
                key={block.sys.id}
                mainContentHeading={block.fields?.heading}
                mainContentParagraph={block.fields.paragraph}
                classes={{
                  wrapper: '!gap-ms',
                  content: '!gap-ms'
                }}
              />
            )
          })}
        </div>
      </ReadbleContent>
    </div>
  )
}
