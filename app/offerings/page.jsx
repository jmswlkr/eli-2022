import { draftMode } from 'next/headers'

import { OFFERINGS_BLOCKS, OFFERINGS_CONTENT } from './offerings-data'
import { useContentful } from 'utils/contentful/useContentful'
import { PAGE_CONFIG } from './page-config'
import { extractOfferingsContent } from './extract-offerings-content'

import { HeaderParagraph } from 'ui-components/header-paragraph/header-paragraph'
import { OfferingBlock } from './_components/offering-block/offering-block'

const Offerings = async () => {
  const { isEnabled } = draftMode()

  const { content } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled,
  })

  const offeringsBlocks = extractOfferingsContent(content)

  return (
    <>
      <HeaderParagraph {...content} />
      {offeringsBlocks.map((block, idx) => {
        return <OfferingBlock key={idx} {...block} />
      })}
    </>
  )
}

export default Offerings