import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import {
  container,
  header,
  content as contentStyle
} from './header-paragraph.module.scss'
import { twm } from '@/utils/tailwind/tw-merge'

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
    <div className={twm(container, classes.wrapper)}>
      {mainContentHeading && (
        <h4 className={twm(header, 'head-4', classes.header)}>{mainContentHeading}</h4>
      )}
      <p className={twm(contentStyle, 'par-1', classes.paragraph)}>
        {documentToReactComponents(mainContentParagraph, formattingOptions)}
      </p>
    </div>
  )
}
