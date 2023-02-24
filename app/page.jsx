'use client';

import { Contact } from './home/contact/contact';
import { Hero } from './home/hero/hero';
import { Intro } from './home/intro';
import { Pillars } from './home/pillars/pillars';
import { Testimonial } from './home/testimonial/testimonial';


export const metadata = {
  title: 'ELI | Learn to Thrive',
}

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
