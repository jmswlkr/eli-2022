'use client'

import Slider from 'react-slick'
import { useRouter } from 'next/navigation'

import { twm } from '@/utils'
import {
  ContentfulImageBlock,
  LinkButton
} from '@/ui-components'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const FlyerSlider = ({ showSlider, slider: slides }) => {
  const settings = {
    dots: slides.length > 1,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    fade: true
  }

  if (!showSlider) return null

  return (
    <section className='SLIDER_CONTAINER max-h-[55vh] w-full lg:w-[var(--content-width)] relative rounded-md overflow-clip'>
      <Slider {...settings}>
        {slides.map((slide) => {
          return (
            <Slide key={slide.sys.id} slide={slide.fields} />
          )
        })}
      </Slider>
    </section>
  )
}

function Slide({ slide }) {
  const router = useRouter()

  const colorThemeMap = {
    dark: {
      title: 'text-primary-900',
      button: 'dark',
      shade: 'bg-primary-300/30'
    },
    light: {
      title: 'text-white',
      button: 'light',
      shade: 'bg-primary-900/50'
    }
  }

  const colorTheme = slide.isLightTheme
    ? colorThemeMap.light
    : colorThemeMap.dark

  function handleNavigateToFlyerItem() {
    router.push(`${baseUrl}${slide.buttonLinkFlyer}`)
  }

  return (
    <article className='SLIDE w-full mb-md h-[40vh] lg:h-[50vh] border relative isolate rounded-md overflow-clip'>
      <div className='TEXT_WRAP full p-md gap-md lg:justify-between lg:flex-row lg:items-end relative z-10 flex flex-col items-start justify-end'>
        <div className='flex-col-tl gap-ms'>
          <p className='meta-1 text-white'>
            {slide.flyerMetaText}
          </p>
          <h2
            className={twm(
              'head-1 !font-body',
              colorTheme.title
            )}
          >
            {slide.title}
          </h2>
        </div>
        <LinkButton
          path={`${baseUrl}${slide.buttonLinkFlyer}`}
          text={slide.buttonText}
          classes={twm('sm solid', colorTheme.button)}
        />
        {/* <ActionButton
          text={slide.buttonText}
          classes={twm('sm solid', colorTheme.button)}
          action={handleNavigateToFlyerItem}
        /> */}
      </div>
      <div className='BG_IMAGE_WRAP absolute-center isolate full overflow-clip z-0'>
        <div
          className={twm(
            'SHADE absolute-shade z-10',
            colorTheme.shade
          )}
        />
        <ContentfulImageBlock
          contentfulImage={slide.image}
          classes='z-0'
        />
      </div>
    </article>
  )
}


