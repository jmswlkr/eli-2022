import React from 'react'
import { QuoteMark } from '../svg/quote-mark'

import {
  container,
  quoteMark,
  text,
  attr,
  author as authorStyle,
  source as sourceStyle,
} from './quote-block.module.scss'

export const QuoteBlock = ({ quote, author, source }) => {
  return (
    <article className={container}>
      <span className={quoteMark}>
        <QuoteMark />
      </span>
      <p className={text}>{quote}</p>
      <div className={attr}>
        <span className={authorStyle}> — &nbsp; {author}</span>
        <span>•</span>
        <span className={sourceStyle}>{source}</span>
      </div>
    </article>
  )
}
