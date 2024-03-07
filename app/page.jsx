import { draftMode } from 'next/headers'

import { useContentful } from '@/contentful'
import { PAGE_CONFIG } from './page.config'

import { FlyerSlider } from './home/flyer-slider'
import { Intro } from './home/intro/intro'
import { PillarsSection } from './home/pillars'
import { Testimonial } from './home/testimonial/testimonial'
import { HeroSection } from './home/hero'
import { ContactSection } from './home/contact'
import { TestComponent } from '@/ui-components'

const Home = async () => {
  const { isEnabled } = draftMode()

  const { content, error } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled
  })

  const components = [
    HeroSection,
    FlyerSlider,
    Intro,
    PillarsSection,
    Testimonial,
    ContactSection
  ]

  if (error) return <div>Error</div> // TODO: Build error page.

  return (
    <>
      {components.map((Component, idx) => (
        <Component key={idx} {...content} />
      ))}
    </>
  )
}

export default Home
