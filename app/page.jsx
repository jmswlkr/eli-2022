import { useContentful } from 'utils/contentful/useContentful'

import { Contact } from './home/contact/contact'
import { Hero } from './home/hero/hero'
import { Intro } from './home/intro/intro'
import { Pillars } from './home/pillars/pillars'
import { Testimonial } from './home/testimonial/testimonial'

const Home = async () => {
  const { content, error } = await useContentful({ key: 'HOME' })

  const components = [Hero, Intro, Pillars, Testimonial, Contact]

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
