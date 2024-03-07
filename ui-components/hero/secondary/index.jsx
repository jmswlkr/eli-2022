import { ContentfulImageBlock } from '@/ui-components'
import { Button } from '@/ui-components'
import { twm } from 'utils/tailwind'

export const HeroSecondary = ({
  titleSegments,
  subtitle,
  subtitlePositionTop,
  imageUrl,
  buttonText = null,
  buttonPath = null,
  ...content
}) => {
  console.log('🚀 ~ content:', content)
  return (
    <section className='HERO_CONTAINER_2 hero-container-2 relative w-full'>
      <div className='CONTENT absolute-center lg:grid-cols-2 lg:grid-rows-1 grid w-screen h-full grid-cols-1 grid-rows-2'>
        <div className='TEXT_WRAP p-xl lg:p-0 flex-center bg-primary-500/10 relative'>
          <div className='TEXT_CONTENT max-w-5/6 flex-col-center lg:flex-col-tl gap-ms z-20'>
            {subtitle && subtitlePositionTop && (
              <p className='SUBTITLE head-3 italic text-primary-500 !font-thin'>
                {subtitle}
              </p>
            )}
            <h1 className='HEADING flex-col-center lg:flex-col-tl head-1 text-primary-500'>
              {titleSegments.map((segment) => {
                return <span key={segment}>{segment}</span>
              })}
            </h1>
            {subtitle && !subtitlePositionTop && (
              <p className='SUBTITLE max-w-4/5 text-center head-3 italic text-primary-500 !font-thin'>
                {subtitle}
              </p>
            )}
            {buttonText && (
              <Button
                text={buttonText}
                path={buttonPath}
                classes='sm solid mt-8'
              />
            )}
          </div>
          <div className='CIRCLE_DECORATION absolute-center aspect-square h-1/2 z-10'>
            <img
              className='absolute-img contain'
              src='/circle-decoration.png'
              alt='circle decoration'
            />
          </div>
          {/* <div className='HERO_IMAGE_MOBILE full absolute-center lg:hidden relative z-0 block'>
            <ContentfulImageBlock
              contentfulImage={imageUrl}
              classes='absolute-img opacity-20'
            />
          </div> */}
        </div>
        <div
          className={twm(
            'HERO_IMAGE bg-primary-600 relative block flex-center',
            content.usePaddedImage && 'py-lg px-[10vw]'
          )}
        >
          <div
            className={twm(
              'PADDING_WRAP full relative overflow-hidden',
              content.usePaddedImage && ''
            )}
          >
            <div
              className={twm(
                'OUTER_FRAME full relative flex-center',
                content.usePaddedImage &&
                  'p-lg border border-primary-300/50'
              )}
            >
              <div className='INNER_FRAME full flex-center relative'>
                <ContentfulImageBlock contentfulImage={imageUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
