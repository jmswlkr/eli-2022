import React from 'react'

import { offerings } from '/public/data/offerings.js'

import { ComingSoon } from '@/elements/coming-soon/coming-soon'
import { PageHero } from '@/page-sections/general/page-hero'

const OfferingPage = ({ offering }) => {
  return (
    <>
      <PageHero {...offering} />
      <ComingSoon />
    </>
  )
}

export default OfferingPage

export async function getStaticPaths() {
  const paths = offerings.map(({ id }) => ({ params: { id } }))

  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params: { id } }) {
  const [offering] = offerings.filter((o) => id === o.id)

  return {
    props: {
      offering,
    },
  }
}
