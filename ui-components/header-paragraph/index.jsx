import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

import { twm } from '@/utils'

export const HeaderParagraph = ({
  mainContentHeading,
  mainContentParagraph,
  classes = {
    wrapper: '',
    heading: '',
    paragraph: ''
  }
}) => {
  const formattingOptions = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>
    },
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    }
  }

  return (
    <div
      className={twm(
        'HP_CONTAINER flex-col-tl gap-md [&_li]:list-disc [&_li]:ml-[2ch]',
        classes.wrapper
      )}
    >
      {mainContentHeading && (
        <h4
          className={twm(
            'HP_HEADER font-body tracking-[1px] head-4 text-primary-500',
            classes.header
          )}
        >
          {mainContentHeading}
        </h4>
      )}
      <p
        className={twm(
          'HP_PARAGRAPH flex-col-tl gap-ms [&_br]:inline-block',
          'par-1',
          classes.paragraph
        )}
      >
        {documentToReactComponents(mainContentParagraph, formattingOptions)}
      </p>
    </div>
  )
}
