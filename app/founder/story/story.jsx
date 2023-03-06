import React from 'react'

import { container, block, light, dark, halves, full } from './story.module.scss'

export const Story = ({ before, after }) => {
  console.log({ before, after })
  return (
    <section className={container}>
      <div className={`${block} ${light}`}>
        <h2>{before.title}</h2>
        <div className={halves}>
          {before.paragraphs.map((paragraph, idx) => {
            return <p key={idx}>{paragraph}</p>
          })}
        </div>
      </div>
      <div className={`${block} ${dark}`}>
        <h2>{after.title}</h2>
        <div className={full}>
          {after.paragraphs.map((paragraph, idx) => {
            return <p key={idx}>{paragraph}</p>
          })}
        </div>
      </div>
    </section>
  )
}
