// External lib
import React from 'react'

// Components
import { Hero } from '../../components/page-sections/about/01-hero/hero'
import { Intro } from './02-intro/intro'
import { Founder } from './03-founder/founder'

const About = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Founder />
    </>
  )
}

export default About
