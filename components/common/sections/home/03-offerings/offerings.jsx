// External lib
import React, { useEffect, useRef, useState } from 'react'
import Marquee from 'react-fast-marquee'

// Internal lib
import { offerings } from '@/data/offerings-data.js'

// Styling
import {
  offerings as offeringsStyle,
  label,
  offeringTextContent,
  title,
  blurb,
  sliderContainer,
  slider,
  blockPos,
  block,
  blockTitle,
  hide,
  zero,
  one,
  two,
  three,
  four,
  five,
} from './offerings.module.scss'
import { baseUrl } from '@/utils/cloudinary'
import { Label } from '@/elements/section-label/section-label'

export const Offerings = () => {
  /*
    TODO: 
    # Currently papering over an error where one (possibly two) block(s) get an undefined classname. 
    # Find the bug causing this. 
  */

  const sliderRef = useRef(null)
  const [focusedOffering, setFocusedOffering] = useState(2)
  const [distributedOfferingIdx, setDistributedOfferingIdx] = useState(2)

  useEffect(() => {
    let converted = focusedOffering;

    if (focusedOffering > 2) {
      converted = focusedOffering - 3
    }

    setDistributedOfferingIdx(converted)

  }, [focusedOffering])
  

  const sizePositionMatrix = [
    zero,
    one,
    two,
    three,
    four,
    five,
  ]

  const getNextByDegree = (curIdx, degree) => {
    const len = sizePositionMatrix.length
    const next = (curIdx + degree) % len

    return next
  }

  const handleSetOffering = () => {
    const len = sizePositionMatrix.length
    const curIdx = focusedOffering

    let next = (curIdx + 1) % len

    setFocusedOffering(next)
  }


  return (
    <section className={offeringsStyle}>
      <div className={label}>
        <Label>Offerings Offerings Offerings </Label>
      </div>
      <div className={offeringTextContent}>
        <h4 className={title}>
          {offerings[distributedOfferingIdx].blurbTitle}
        </h4>
        <p className={blurb}>
          {offerings[distributedOfferingIdx].blurb}
        </p>
      </div>
      <div className={sliderContainer}>
        <div className={`${slider}`} ref={sliderRef}>
          {[...offerings, ...offerings].map((offr, idx) => {
            const offsetDegree = idx - 2

            return (
              <span
                key={`${offr.name}-${idx}`}
                className={`${block} ${blockPos} ${
                  sizePositionMatrix[
                    getNextByDegree(
                      focusedOffering,
                      offsetDegree
                    )
                  ] ?? hide
                }`}
                onClick={() => handleSetOffering()}
              >
                <img
                  src={baseUrl(offr.imgUrlFrag, 'good')}
                  alt={offr.name}
                />
                <h3 className={blockTitle}>{offr.title}</h3>
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
