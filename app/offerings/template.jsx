'use client'

import { useSelectedLayoutSegment } from 'next/navigation'

import { offerings } from './offerings-data'

import { PageHero } from 'ui-components/page-hero/page-hero'
import { ContentLayout } from 'ui-components/content-layout/content-layout'

const OfferingsTemplate = ({ children }) => {
  const id = useSelectedLayoutSegment()

  const heroContent = offerings[id] ?? offerings.index

  return (
    <ContentLayout>
      <PageHero {...heroContent} />
      {children}
    </ContentLayout>
  )
}

export default OfferingsTemplate
