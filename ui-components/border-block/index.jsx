import { HeaderParagraph } from '..'

export const BorderBlock = ({ heading, paragraph }) => {
  return (
    <div
      className='LIST_ITEM border-primary-500 flex-col-tl gap-ms bg-primary-100 p-md border-l-2 rounded-r-lg'
    >
      <HeaderParagraph
        mainContentHeading={heading}
        mainContentParagraph={paragraph}
        classes={{ wrapper: '!gap-ms', content: '!gap-ms' }}
      />
    </div>
  )
}
