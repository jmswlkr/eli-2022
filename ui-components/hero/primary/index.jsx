'use client'

import { ContentfulImageBlock } from '@/ui-components'
import { twm } from '@/utils'

import { TEXT_STYLE_MAP } from './style-map'


export const HeroPrimary = ({
  textLines,
  media,
  classes = {
    container: '',
    textContainer: '',
    imageContainer: '',
    shade: 'bg-primary-500/10'
  }
}) => {
  return (
    <section
      className={twm(
        'HERO_CONTAINER_1 relative hero-container-1',
        classes.container
      )}
    >
      <div className='POSITION_WRAP isolate absolute-center w-screen h-full'>
        <div
          className={twm(
            'TEXT_WRAP relative full flex-col-center z-10',
            classes.textContainer
          )}
        >
          <h1 className='HEADING flex-col-center gap-md p-md text-center'>
            {textLines.map(({ sys, fields }) => {
              const styles = [
                TEXT_STYLE_MAP.size[fields.size],
                TEXT_STYLE_MAP.weight[fields.weight],
                TEXT_STYLE_MAP.color[fields.color]
              ]

              return (
                <span key={sys.id} className={twm(...styles)}>
                  {fields.text}
                </span>
              )
            })}
          </h1>
        </div>
        <div
          className={twm(
            'IMAGE_WRAP z-0 full absolute-center',
            classes.imageContainer
          )}
        >
          <div className={twm('SHADE full absolute-center z-20', classes.shade)} />
          <ContentfulImageBlock contentfulImage={media} />
        </div>
      </div>
    </section>
  )
}
