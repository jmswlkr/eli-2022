import React from 'react'

import { OFFERINGS_BLOCKS, OFFERINGS_CONTENT } from './offerings-data'

import { HeaderParagraph } from 'ui-components/header-paragraph/header-paragraph'
import { OfferingBlock } from './_components/offering-block/offering-block'

const Offerings = () => {
  return (
    <>
      <HeaderParagraph {...OFFERINGS_CONTENT} />
      {OFFERINGS_BLOCKS.map((block, idx) => {
        return <OfferingBlock key={idx} {...block} />
      })}
    </>
  )
}

export default Offerings
