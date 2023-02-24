import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { createPortal } from 'react-dom'
import { useInView } from 'react-intersection-observer'

import { testimonialData } from './testimonial-data'

import { animationProps } from 'animation/animate'
import { phases } from 'animation/transition'
import { fadeIn } from 'animation/fade'

// Stying & Animation
import {
  testimonial,
  sectionAccent,
  label,
  header,
  title,
  text,
  testimonialSliderBase,
  testimonialSlider,
  testimonialList,
  quoteContainer,
  quoteMark,
  quote,
  videoContainer,
  videoWrap,
  expandVideoBtn,
  videoShade,
  hideShade,
  modalShade,
  closeModalBtn,
  modal,
  attr,
  attrInitial,
  fadeTransitionBlock,
  scrollTip,
} from './testimonial.module.scss'
import { PlayButton } from 'ui-components/svg/play-button'
import { QuoteMark } from 'ui-components/svg/quote-mark'

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
      <div className={header}>
        <h2 className={title}>Praise for ELI</h2>
        <div className={label}>
          {/* <Label> Testimonial Testimonial Testimonial </Label> */}
        </div>
      </div>
      <div className={testimonialSliderBase}>
        <div className={testimonialSlider}>
          <ul className={testimonialList}>
            {testimonialData.map((tst, idx) => {
              const isVideo = tst?.videoUrl
              return (
                <motion.li
                  key={idx}
                  className={quoteContainer}
                  {...animationProps({
                    controls,
                    dur: 2,
                    del: (idx + 1) * 0.333,
                  })}
                >
                  {isVideo ? (
                    <VideoTestimonial {...tst} />
                  ) : (
                    <TextTestimonial {...tst} />
                  )}
                  <span className={attr}>
                    {/* <div className={attrInitial}>{tst.name[0]}</div> */}
                    <span> - {tst.name}</span>
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

function TextTestimonial({ text }) {
  return (
    <>
      <span className={quoteMark}>
        <QuoteMark />
      </span>
      <blockquote className={quote}>{text}</blockquote>
    </>
  )
}

function VideoTestimonial({ videoUrl, name, text, videoThumb }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeToStart, setTimeToStart] = useState(0)
  const [isPlayingInModal, setIsPlayingInModal] = useState(false)
  const [portal, setPortal] = useState(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const portalNode = document.querySelector('#portal')
    setPortal(portalNode)
  }, [])

  const handleStartPlaying = (e) => {
    setIsPlaying(!isPlaying)
    videoRef.current.play()
  }

  const handleVideoClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    videoRef.current.pause()

    setIsPlaying(false)
  }

  const handleExpandToModal = (e) => {
    e.preventDefault()
    e.stopPropagation()
    videoRef.current.pause()
    console.log('should play in modal')

    setIsPlayingInModal(true)
    setTimeToStart(Math.floor(videoRef.current.currentTime))
    setIsPlaying(false)
  }

  const handleCloseModal = () => {
    setIsPlayingInModal(false)
  }

  return (
    <>
      {isPlayingInModal &&
        createPortal(
          <VideoModal
            videoUrl={videoUrl}
            timeToStart={timeToStart}
            closeModal={handleCloseModal}
          />,
          portal
        )}
      <span className={quoteMark}>
        <QuoteMark />
      </span>
      <div className={videoContainer}>
        {text}
        <div className={videoWrap} onClick={handleStartPlaying}>
          <div className={`${videoShade} ${isPlaying ? hideShade : ''}`}>
            <PlayButton />
          </div>
          {isPlaying && (
            <button className={expandVideoBtn} onClick={handleExpandToModal}>
              ◰
            </button>
          )}
          <video
            id={name}
            ref={videoRef}
            src={videoUrl}
            poster={videoThumb}
            controls={isPlaying}
            controlsList={'nofullscreen'}
            onEnded={() => setIsPlaying(false)}
            onClick={handleVideoClick}
          />
        </div>
      </div>
    </>
  )
}

function VideoModal({ videoUrl, timeToStart, closeModal }) {
  const modalVideoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleStartTime = () => {
    modalVideoRef.current.currentTime = timeToStart
  }

  const handleStartPlaying = (e) => {
    setIsPlaying(!isPlaying)
    modalVideoRef.current.play()
  }

  const handleVideoClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    modalVideoRef.current.pause()

    setIsPlaying(false)
  }

  const handleClose = () => {
    closeModal()
  }

  return (
    <motion.div {...phases} {...fadeIn} className={modalShade}>
      <button className={closeModalBtn} onClick={handleClose}>
        &times;
      </button>
      <div className={modal} onClick={handleStartPlaying}>
        <div className={`${videoShade} ${isPlaying ? hideShade : ''}`}>
          <PlayButton />
        </div>
        <video
          ref={modalVideoRef}
          src={videoUrl}
          controls={isPlaying}
          onEnded={() => setIsPlaying(false)}
          onLoadedMetadata={handleStartTime}
          onClick={handleVideoClick}
        />
      </div>
    </motion.div>
  )
}
