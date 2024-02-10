import { ContentfulImageBlock } from '@/ui-components'
import { Button } from '@/ui-components'

export const HeroSecondary = ({
  titleSegments,
  subtitle,
  subtitlePositionTop,
  imageUrl,
  buttonText = null,
  buttonPath = null
}) => {
  return (
    <section className='HERO_CONTAINER_2 hero-container-2 relative w-full'>
      <div className='CONTENT absolute-center lg:grid-cols-2 grid w-screen h-full'>
        <div className='TEXT_WRAP flex-center bg-primary-500/10 relative'>
          <div className='TEXT_CONTENT flex-col-tl gap-ms z-20'>
            {subtitle && subtitlePositionTop && (
              <p className='SUBTITLE head-3 italic text-primary-500 !font-thin'>
                {subtitle}
              </p>
            )}
            <h1 className='HEADING flex-col-tl head-1 text-primary-500'>
              {titleSegments.map((segment) => {
                return <span key={segment}>{segment}</span>
              })}
            </h1>
            {subtitle && !subtitlePositionTop && (
              <p className='SUBTITLE head-3 italic text-primary-500 !font-thin'>
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
          <div className='HERO_IMAGE_MOBILE full absolute-center lg:hidden relative z-0 block'>
            <ContentfulImageBlock
              contentfulImage={imageUrl}
              classes='absolute-img opacity-20'
            />
          </div>
        </div>
        <div className='HERO_IMAGE_DESK lg:block relative hidden'>
          <ContentfulImageBlock contentfulImage={imageUrl} />
        </div>
      </div>
    </section>
  )
}
