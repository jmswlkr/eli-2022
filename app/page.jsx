import { draftMode } from 'next/headers'

import { useContentful } from '@/contentful'
import { PAGE_CONFIG } from './page.config'

import { Contact } from './home/contact/contact'
import { Hero } from './home/hero/hero'
import { FlyerSlider } from './home/flyer-slider'
import { Intro } from './home/intro/intro'
import { Pillars } from './home/pillars/pillars'
import { Testimonial } from './home/testimonial/testimonial'

const Home = async () => {
  const { isEnabled } = draftMode()

  const { content, error } = await useContentful({
    ...PAGE_CONFIG,
    preview: isEnabled,
  })

  const components = [Hero, FlyerSlider, Intro, Pillars, Testimonial, Contact]

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
