import { Contact } from './home/contact/contact'
import { Hero } from './home/hero/hero'
import { Intro } from './home/intro/intro'
import { Pillars } from './home/pillars/pillars'
import { Testimonial } from './home/testimonial/testimonial'

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Pillars />
      <Testimonial />
      <Contact />
    </>
  )
}

export default Home