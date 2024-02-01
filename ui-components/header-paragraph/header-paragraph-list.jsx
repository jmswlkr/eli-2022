import { HeaderParagraph } from "./header-paragraph"

import { container } from './header-paragraph-list.module.scss'

export const HeaderParagraphList = ({ paragraphs }) => {
  return (
    <section className={container}>{
      paragraphs.map((paragraph, idx) => {
        return (
          <HeaderParagraph
            key={idx}
            mainContentHeading={paragraph.fields.heading}
            mainContentParagraph={paragraph.fields.paragraph}
          />
        )
      })
    }</section>
  )
}
