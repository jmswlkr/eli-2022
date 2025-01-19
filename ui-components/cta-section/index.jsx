import React from 'react'

import { LinkButton } from '@/ui-components'

import { ContentfulImageBlock } from '../contentful-image-block'

const DEFAULTS = {
  title: 'Schedule an Appointment',
  blurb:
    'Get started on your road to wellness. Schedule a free online consult with us today.',
  buttonText: 'View Calendar →',
  buttonLink: '/calendar',
  image: {
    fields: {
      file: {
        url: 'https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:eco/v1654689213/ELI/lily_qzb4mr.jpg',
        alt: 'A lily floating on the surface of a pond.'
      }
    }
  }
}

export const CtaSection = ({
  title = DEFAULTS.title,
  blurb = DEFAULTS.blurb,
  buttonText = DEFAULTS.buttonText,
  buttonLink = DEFAULTS.buttonLink,
  image = DEFAULTS.image
}) => {
  return (
    <section className='CTA_CONTAINER relative lg:w-full h-[65vh]'>
      <div className='FULLBLEED_WRAP bg-primary-100 absolute-center flex-center h-full !w-screen'>
        <div className='CTA_CONTENT_GRID grid-rows-1 grid-cols-1 lg:grid-cols-2 lg:py-xl h-full w-full lg:w-[var(--reading-content-width)] grid'>
          <div className='gap-md lg:items-start relative z-20 flex flex-col items-center justify-center'>
            <h3 className='head-3 text-primary-300 lg:text-primary-500'>{title}</h3>
            <p className=' !leading-[150%] text-white lg:text-primary_text lg:par-1 w-4/5 md:w-2/3 lg:w-4/5 lg:text-left text-center'>{blurb}</p>
            <LinkButton text={buttonText} path={buttonLink} classes='solid med hover:!bg-primary-900 !bg-primary-300 lg:!bg-primary-500' />
          </div>
          <div className='SHADE bg-primary-300/30 absolute-shade z-10' />
          <div className='SHADE bg-black/50 absolute-shade lg:hidden z-10' />
          <div className='CTA_IMAGE absolute-center full lg:!h-4/5 overflow-hidden lg:rounded-lg lg:!relative z-0'>
            <ContentfulImageBlock contentfulImage={image} />
          </div>
        </div>
      </div>
    </section>
  )
}
