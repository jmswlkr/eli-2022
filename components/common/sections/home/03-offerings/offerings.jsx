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
  source,
  dest,
  hide,
  blockBtn,
  zero,
  one,
  two,
  three,
  four,
  five,
} from './offerings.module.scss'
import { baseUrl } from '@/utils/cloudinary'
import { Label } from '@/elements/section-label/section-label'
import { ArrowBtn } from '@/elements/arrow-btn/arrow-btn'

export const Offerings = () => {
  /*
    TODO: 
    # Currently papering over an error where one (possibly two) block(s) get an undefined classname. 
    # Find the bug causing this. 
  */

  const sliderRef = useRef(null)
  const [focusedOffering, setFocusedOffering] = useState(2)
  const [
    distributedOfferingIdx,
    setDistributedOfferingIdx,
  ] = useState(2)

  useEffect(() => {
    let converted = focusedOffering

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

  // Turn array into closed loop
  const next = (currentIndex, length) =>
    (currentIndex + 1) % length

  // Navigate closed loop array by variable increments
  const getNextByDegree = (curIdx, degree) => {
    const len = sizePositionMatrix.length
    const nextDegree = next(curIdx + degree, len)

    return nextDegree
  }

  // Set focused offering by 1 or two positions based on clicked block's position
  const handleSetOffering = (clickedPosition) => {
    let runTwice = clickedPosition === 1
    const len = sizePositionMatrix.length
    const curIdx = focusedOffering

    setFocusedOffering(next(curIdx, len))

    if (runTwice) {
      setTimeout(() => {
        setFocusedOffering((prvState) =>
          next(prvState, len)
        )
      })
    }
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
            const clickedPos = getNextByDegree(
              focusedOffering,
              offsetDegree
            )
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
                onClick={() => {
                  if ([3, 4].includes(clickedPos))  return;

                  handleSetOffering(clickedPos)
                }
                }
              >
                <img
                  src={baseUrl(offr.imgUrlFrag, 'good')}
                  alt={offr.name}
                />
                <h3 className={blockTitle}>
                  {offr.title}
                  <span className={blockBtn}>
                    <ArrowBtn>Learn More</ArrowBtn>
                  </span>
                </h3>
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
