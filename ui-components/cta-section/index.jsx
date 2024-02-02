import React from 'react'

import { Button } from 'ui-components/general-btn/general-btn'

import {
  container,
  content,
  words,
  header,
  paragraph,
  image as imageStyle
} from './cta-section.module.scss'
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
    <section className={container}>
      <div className={content}>
        <div className={words}>
          <h3 className={header}>{title}</h3>
          <p className={paragraph}>{blurb}</p>
          <Button text={buttonText} path={buttonLink} classes='solid med' />
        </div>
        <div className={imageStyle}>
          <ContentfulImageBlock contentfulData={image} />
        </div>
      </div>
    </section>
  )
}
