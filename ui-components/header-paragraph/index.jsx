import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import {
  container,
  header,
  content as contentStyle
} from './header-paragraph.module.scss'
import { twm } from '@/utils'

// TODO: Rewrite styles with tailwind.

export const HeaderParagraph = ({
  mainContentHeading,
  mainContentParagraph,
  classes = {
    wrapper: '',
    heading: '',
    paragraph: ''
  }
}) => {
  const formattingOptions = {
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    }
  }

  return (
    <div className={twm('HP_CONTAINER flex-col-tl gap-md', classes.wrapper)}>
      {mainContentHeading && (
        <h4 className={twm('HP_HEADER font-body tracking-[1px] head-4 text-primary-500', classes.header)}>{mainContentHeading}</h4>
      )}
      <p className={twm('HP_PARAGRAPH flex-col-tl [&_br]:inline-block', 'par-1', classes.paragraph)}>
        {documentToReactComponents(mainContentParagraph, formattingOptions)}
      </p>
    </div>
  )
}
