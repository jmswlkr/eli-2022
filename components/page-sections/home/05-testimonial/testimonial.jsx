import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { testimonialData } from '@/ancillary/small-data.js'

import { QuoteMark } from 'components/elements/svg/quote-mark'
import { Label } from 'components/elements/section-label/section-label'

// Stying & Animation
import {
  testimonial,
  sectionAccent,
  label,
  blurb,
  title,
  text,
  testimonialSliderBase,
  testimonialSlider,
  testimonialList,
  quoteContainer,
  quoteMark,
  quote,
  attr,
  attrImg,
  fadeTransitionBlock,
  scrollTip,
} from './testimonial.module.scss'
import { WaveCircles } from '@/elements/svg/wave-circles'
import { animationProps } from 'animation/animate'

export const Testimonial = () => {
  const [sectionRef, sectionInView] = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (sectionInView) {
      controls.start('visible')
    }
  }, [sectionInView, controls])

  return (
    <section className={testimonial} ref={sectionRef}>
      <div className={sectionAccent}>
        <WaveCircles />
      </div>
      <div className={label}>
        <Label> Testimonial Testimonial Testimonial </Label>
      </div>
      <div className={blurb}>
        <h2 className={title}>Testimonials</h2>
        <p className={text}>
          <span>Transformation is the fruit of our labor.</span>
          <span>
            Mauris dictum egestas felis at semper. Aenean at tortor eros. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </span>
        </p>
      </div>
      <div className={testimonialSliderBase}>
        <div className={testimonialSlider}>
          <ul className={testimonialList}>
            {testimonialData.map((tst, idx) => {
              return (
                <motion.li
                  key={idx}
                  className={quoteContainer}
                  {...animationProps({
                    controls,
                    dur: 2,
                    del: (idx + 1) * .333
                  })}
                >
                  <span className={quoteMark}>
                    <QuoteMark />
                  </span>
                  <blockquote className={quote}>{tst.text}</blockquote>
                  <span className={attr}>
                    <div className={attrImg}>
                      <img src={tst.avatarUrl} alt='testimonial contributor' />
                    </div>
                    <span> {tst.initials}</span>
                  </span>
                </motion.li>
              )
            })}
          </ul>
        </div>
        <span className={scrollTip}>Scroll for more →</span>
        <div className={fadeTransitionBlock} />
      </div>
    </section>
  )
}
