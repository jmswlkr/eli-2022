import React from 'react'

import { HeaderParagraph } from 'ui-components/header-paragraph/header-paragraph'
import { container } from './body-content.module.scss'

export const BodyContent = ({ mainContent }) => {
  return (
    <div className={container}>
      <HeaderParagraph mainContentParagraph={mainContent} />
    </div>
  )
}
