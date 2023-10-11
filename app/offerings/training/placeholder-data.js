import { PAGE_CONFIG } from "../consulting/page-config"

const { defaultImage } = PAGE_CONFIG

const ctaImg = {
  url: 'https://res.cloudinary.com/jameswalker-work/image/upload/v1678207676/ELI/flower--square_fiyevn.png',
  alt: 'A lily flower floating on the surface of a pond.',
}

export const PLACEHOLDER_DATA = {
  hero: {
    heroHeaderLines: ['Transformational', 'Training'], 
    heroSubtitle: '', 
    image: null, 
    heroImage: null, 
    defaultImage, 
    heroButtonText: null, 
    buttonLink: null, 
  },
  cta: {
    title: 'Schedule an Appointment',
    text: 'Get to know us with a free 30-minute consulting session.',
    btnText: 'Schedule Now',
    btnPath: '/calendar',
    imageUrl: ctaImg.url,
    imageAlt: ctaImg.alt,
    ctaHeader: null,
    ctaBlurb: null,
    ctaButtonText: null,
    ctaLinkedPage: null,
  }
}