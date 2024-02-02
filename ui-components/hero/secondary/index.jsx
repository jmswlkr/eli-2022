import { ContentfulImageBlock } from '@/ui-components/contentful-image-block'
import { Button } from '@/ui-components/general-btn/general-btn'

export const HeroSecondary = ({
  titleSegments,
  imageUrl,
  buttonText = null,
  buttonPath = null
}) => {
  return (
    <section className='HERO_CONTAINER_2 hero-container-2 relative w-full'>
      <div className='CONTENT absolute-center lg:grid-cols-2 grid w-screen h-full'>
        <div className='TEXT_WRAP flex-center bg-primary-500/10 relative'>
          <div className='TEXT_CONTENT flex-col-tl gap-md z-20'>
            <h1 className='HEADING flex-col-tl head-1 text-primary-500'>
              {titleSegments.map((segment) => {
                return <span key={segment}>{segment}</span>
              })}
            </h1>
            {buttonText && (
              <Button
                text={buttonText}
                path={buttonPath}
                classes='sm solid mt-8'
              />
            )}
          </div>
          <div className='CIRCLE_DECORATION absolute-center aspect-square h-1/2 lg:h-2/3 z-10'>
            <img
              className='absolute-img contain'
              src='/circle-decoration.png'
              alt='circle decoration'
            />
          </div>
          <div className='HERO_IMAGE_MOBILE full absolute-center lg:hidden relative z-0 block'>
            <ContentfulImageBlock contentfulData={imageUrl} classes='absolute-img opacity-20' />
          </div>
        </div>
        <div className='HERO_IMAGE_DESK lg:block relative hidden'>
          <ContentfulImageBlock contentfulData={imageUrl} />
        </div>
      </div>
    </section>
  )
}
