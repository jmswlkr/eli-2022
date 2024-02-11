import { twm } from '@/utils'
import { HeaderParagraph } from '@/ui-components'

export const StorySection = ({ storyContent }) => {
  return (
    <section className='STORY_SECTION'>
      {storyContent.map((block, idx) => {
        const colorThemes = [
          {
            bg: 'bg-primary-600',
            heading: '!text-primary-300',
            paragraph: '!text-white'
          },
          {
            bg: 'bg-primary-300',
            heading: '!text-primary-600',
            paragraph: '!text-white'
          },
          {
            bg: 'bg-primary-100',
            heading: '!text-primary-600',
            paragraph: 'text-primary_text'
          }
        ]

        return (
          <StoryBlock
            key={block.sys.id}
            block={block.fields}
            colorTheme={colorThemes[idx]}
          />
        )
      })}
    </section>
  )
}

function StoryBlock({ block, colorTheme }) {
  return (
    <div className={twm('STORY_BLOCK p-lg', colorTheme.bg)}>
      <HeaderParagraph
        mainContentHeading={block.heading}
        mainContentParagraph={block.paragraph}
        classes={{
          header: colorTheme.heading,
          paragraph: colorTheme.paragraph
        }}
      />
    </div>
  )
}
