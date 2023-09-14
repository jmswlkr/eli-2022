import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { container, header, content } from './coaching-block.module.scss'

export const CoachingBlock = ({ idx, title, text }) => {
  const formattingOptions = {
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    }
  }

  return (
    <article className={container} data-grid-id={`c${idx}`}>
      <h4 className={header}>{title}</h4>
      <p className={content}>
        {documentToReactComponents(text, formattingOptions)}
      </p>
    </article>
  )
}
