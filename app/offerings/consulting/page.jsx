import React from 'react'
import { ComingSoon } from 'ui-components/coming-soon/coming-soon'
import { CtaSection } from 'ui-components/cta-section/cta-section'
import { PageHero } from 'ui-components/page-hero/page-hero'
import { PLACEHOLDER_DATA } from '../training/placeholder-data'

const { hero, cta } = PLACEHOLDER_DATA;

const OrganizationalConsulting = () => {
  return (
    <div>
      <PageHero {...hero} />
      <ComingSoon />
      <CtaSection {...cta}/>
    </div>
  )
}

export default OrganizationalConsulting


