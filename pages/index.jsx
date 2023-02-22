// External lib
import React from 'react'

// Components
import { Hero } from '@/page-sections/home/01-hero/hero.jsx'
import { Pillars } from '@/page-sections/home/04-pillars/pillars'
import { Testimonial } from '@/page-sections/home/05-testimonial/testimonial'
import { Contact } from '@/page-sections/home/07-contact/contact'
import { IntroSection } from '@/page-sections/home/02-intro/index'

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <Pillars />
      <Testimonial />
      <Contact />
    </>
  )
}
