import React from 'react'

import { INTRO_DATA, ETHOS_DATA } from './coaching-data'

import { HeaderParagraph } from 'ui-components/header-paragraph/header-paragraph'
import { CoachingBlock } from './coaching-block'

import { container, intro, ethos } from './page.module.scss'

const LeadershipCoaching = () => {
  return (
    <div className={container}>
      <section className={intro}>
        {INTRO_DATA.map((data) => {
          return <HeaderParagraph key={data.id} {...data} />
        })}
      </section>
      <section className={ethos}>
        {ETHOS_DATA.map((data, idx) => {
          return <CoachingBlock key={data.id} idx={idx} {...data} />
        })}
      </section>
    </div>
  )
}

export default LeadershipCoaching
