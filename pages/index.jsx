// External lib
import React from 'react'

// Components
import { Hero } from './home/01-hero/hero.jsx'
import { Intro } from './home/02-intro/intro.jsx'
import { Offerings } from './home/03-offerings/offerings'
import { Pillars } from './home/04-pillars/pillars'
import { Testimonial } from './home/05-testimonial/testimonial'
import { Contact } from './home/07-contact/contact'
import { Scheduling } from './home/06-scheduling/scheduling'




export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Offerings />
      <Pillars />
      <Testimonial />
      <Scheduling />
      <Contact />
    </>
  )
}
