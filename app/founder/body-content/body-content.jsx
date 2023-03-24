import React from 'react'
import { HeaderParagraph } from 'ui-components/header-paragraph/header-paragraph'

import { container } from './body-content.module.scss'

export const BodyContent = ({
  mainContentParagraph1 = '', 
  mainContentParagraph2 = '',
  mainContentParagraph3 = '',
}) => {
  const contents = [
    { paragraph: mainContentParagraph1 },
    { paragraph: mainContentParagraph2 },
    { paragraph: mainContentParagraph3 },
  ]

  return (
    <div className={container}>
      {contents.map(({ paragraph }, idx) => {
        return <HeaderParagraph key={idx} text={paragraph} />
      })}
    </div>
  )
}
