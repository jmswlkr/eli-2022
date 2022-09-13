// External lib
import React, { useEffect, useState } from 'react'

// Components
import { Hero } from '@/page-sections/home/01-hero/hero.jsx'
import { Intro } from '@/page-sections/home/02-intro/intro.jsx'
import { Offerings } from '@/page-sections/home/03-offerings/desktop/offerings'
import { Pillars } from '@/page-sections/home/04-pillars/pillars'
import { Testimonial } from '@/page-sections/home/05-testimonial/testimonial'
import { Contact } from '@/page-sections/home/07-contact/contact'
import { Scheduling } from '@/page-sections/home/06-scheduling/desktop/scheduling'
import { ScheduleMobile } from '@/page-sections/home/06-scheduling/mobile/scheduling.mobile'
import { OfferingsMobile } from '@/page-sections/home/03-offerings/mobile/offerings.mobile'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  return (
    <>
      <Hero />
      <Intro />
      {isMobile ? <OfferingsMobile /> : <Offerings />}
      <Pillars />
      <Testimonial />
      {/* {isMobile ? <ScheduleMobile /> : <Scheduling />} */}
      <Scheduling />
      <Contact />
    </>
  )
}
