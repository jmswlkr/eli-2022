import { twm } from "@/utils"
import { HeaderParagraph } from "@/ui-components"


export const HeaderParagraphList = ({ paragraphs, classes }) => {
  return (
    <section className={twm('flex-col-tl gap-md', classes)}>{
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
