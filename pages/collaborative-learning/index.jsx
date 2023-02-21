import { ComingSoon } from '@/elements/coming-soon/coming-soon'
import { PageHero } from '@/page-sections/general/page-hero'
import React from 'react'

import { content, intro } from '../../components/page-sections/offering/collab.module.scss'

const CollaborativeLearning = () => {
  return (
    <>
      <PageHero />
      <div className={content}>
        <ComingSoon/>
        {/* <p className={intro}>
          Co-create individual and collective change through group learning
          experiences that challenges the cultural status quo, ignite collective
          passion, and inspire new ways of being.
        </p> */}
      </div>
    </>
  )
}

export default CollaborativeLearning