import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import {
  container,
  header,
  content as contentStyle
} from './header-paragraph.module.scss'

export const HeaderParagraph = ({
  mainContentHeading,
  mainContentParagraph
}) => {
  const formattingOptions = {
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    }
  }

  return (
    <div className={container}>
      <h5 className={header}>{mainContentHeading}</h5>
      <p className={contentStyle}>
        {documentToReactComponents(mainContentParagraph, formattingOptions)}
      </p>
    </div>
  )
}
