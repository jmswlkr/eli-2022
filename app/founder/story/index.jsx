import { twm } from '@/utils'
import {
  ContentfulImageBlock,
  HeaderParagraph,
  LinkButton
} from '@/ui-components'

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

        if (
          block.sys.contentType.sys.id ===
          'componentInterstitialImage'
        ) {
          return (
            <div
              className='image-wrap h-[500px] w-full relative'
              key={block.sys.id}
            >
              <ContentfulImageBlock
                contentfulImage={block.fields.image}
              />
            </div>
          )
        }

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
  console.log("🚀 ~ StoryBlock ~ block:", block)
  return (
    <div
      className={twm(
        'STORY_BLOCK flex-col-tl gap-md p-md pt-lg lg:p-lg',
        colorTheme.bg
      )}
    >
      <HeaderParagraph
        mainContentHeading={block.heading}
        mainContentParagraph={block.paragraph}
        classes={{
          header: colorTheme.heading,
          paragraph: `${colorTheme.paragraph} flex-col-tl gap-ms lg:gap-md`
        }}
      />
      {block.buttonText && block.buttonLink && (
        <LinkButton text={block.buttonText} path={block.buttonLink} classes='solid med !mt-md'/>
      )}
    </div>
  )
}
