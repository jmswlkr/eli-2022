import DetailPage from '@/elements/detail-page'
import React from 'react'

import { allOfferings } from '/data/offering-data.js'

const Offering = ({ text, images }) => {
  return (
    <DetailPage textData={text} imageData={images} />
  )
}

export default Offering

// API  
export const getStaticPaths = async () => {
  const paths = allOfferings.map(({ id }) => {
    return { params: { id } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params

  const { text, images } = allOfferings.find(ofr => ofr.id === id)

  return {
    props: {
      text,
      images
    },
  }
}