'use client'

import { useSelectedLayoutSegment } from 'next/navigation'

import { offerings } from './offerings-data'

import { PageHero } from 'ui-components/page-hero/page-hero'
import { ComingSoon } from 'ui-components/coming-soon/coming-soon'

const OfferingsTemplate = ({ children }) => {
  const id = useSelectedLayoutSegment()

  return (
    <>
      <PageHero {...offerings[id]} />
      <ComingSoon />
      {children}
    </>
  )
}

export default OfferingsTemplate
