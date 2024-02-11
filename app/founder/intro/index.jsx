import { HeaderParagraph } from '@/ui-components'

export const IntroSection = ({ introContent: { fields: intro } }) => {
  return (
    <section className='INTRO_SECTION'>
      <HeaderParagraph
        mainContentHeading={intro.heading}
        mainContentParagraph={intro.paragraph}
        classes={{ wrapper: '!gap-md', header: '!font-italic' }}
      />
    </section>
  )
}
