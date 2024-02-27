'use client'

import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { twm } from '@/utils'
import { blurFadeIn, fadeIn } from 'animation/fade'
import { phases, smooth } from 'animation/transition'

export const ContentfulImageBlock = ({ contentfulImage, classes }) => {
  const src = contentfulImage.fields.file.url
  const alt = contentfulImage.fields.title

  const [showImage, setShowImage] = useState(false)

  return (
    <AnimatePresence>
      <motion.img
        className={twm('absolute-img', classes)}
        src={src}
        alt={alt}
        {...fadeIn}
        {...phases}
        transition={smooth()}
      />
    </AnimatePresence>
  )
}
