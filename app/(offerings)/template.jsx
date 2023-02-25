'use client'

import { useSelectedLayoutSegment } from 'next/navigation'

import { offerings } from './offerings-data'

import { PageHero } from 'ui-components/page-hero/page-hero'

const OfferingsTemplate = ({ children }) => {
  const id = useSelectedLayoutSegment()

  return (
    <>
      <PageHero {...offerings[id]} />
      {children}
    </>
  )
}

export default OfferingsTemplate
