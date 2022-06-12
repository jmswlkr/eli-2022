// External lib
import React from 'react'

// Components
import { Hero } from '@/sections/home/01-hero/hero.jsx'
import { Intro } from '@/sections/home/02-intro/intro.jsx'
import { Offerings } from '@/sections/home/03-offerings/offerings'
import { Pillars } from '@/sections/home/04-pillars/pillars'
import { Testimonial } from '@/sections/home/05-testimonial/testimonial'
import { Contact } from '@/sections/home/06-contact/contact'




export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Offerings />
      <Pillars />
      <Testimonial />
      <Contact />
    </>
  )
}
