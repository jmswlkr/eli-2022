import React from 'react'
import { splitMarkdown } from 'utils/text-helpers'

import {
  container,
  block,
  light,
  dark,
  halves,
  full,
} from './story.module.scss'

export const Story = ({ storyBlock1Title, storyBlock1Content, storyBlock2Title, storyBlock2Content }) => {

  const story1Content = splitMarkdown(storyBlock1Content)
  const story2Content = splitMarkdown(storyBlock2Content)

  return (
    <section className={container}>
      <div className={`${block} ${light}`}>
        <h2>{storyBlock1Title}</h2>
        <div className={full}>
          {story1Content?.map((paragraph, idx) => {
            return <p key={idx}>{paragraph}</p>
          })}
        </div>
      </div>
      <div className={`${block} ${dark}`}>
        <h2>{storyBlock2Title}</h2>
        <div className={full}>
          {story2Content?.map((paragraph, idx) => {
            return <p key={idx}>{paragraph}</p>
          }) ?? ''}
        </div>
      </div>
    </section>
  )
}
