'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { AnimatePresence, motion } from 'framer-motion'

import { TopNav } from './top-nav/top-nav'

import { useActionOnKey } from 'hooks/useActionOnKey'
import { useLayoutContext } from 'app/(context)/layout.context'

import { phases } from 'animation/transition'
import { blurFadeIn } from 'animation/fade'

import { CloseIcon } from '@/ui-components'
import { Footer } from './footer'
import { SiteMenu } from './menu'

import { layout, content, modal, close } from './client-layout.module.scss'


export const ClientLayout = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const { ref: heroRef, inView: heroInView } = useInView({
    initialInView: true
  })

  const { contentModalOpen, modalContent } = useLayoutContext()

  return (
    <div className={layout}>
      <article id='portal' />
      <TopNav
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        showBG={!heroInView}
      />
      <SiteMenu modalOpen={modalOpen} closeModal={() => setModalOpen(false)} />
      <ModalContainer />
      <main className={content}>
        <span className='vp-marker vp-marker__hero' ref={heroRef} />
        {children}
      </main>
      <Footer />
    </div>
  )
}

function ModalContainer() {
  const { setContentModalOpen, contentModalOpen, modalContent } =
    useLayoutContext()

  useActionOnKey(() => setContentModalOpen(false))

  return (
    <AnimatePresence>
      {contentModalOpen && (
        <motion.div className={modal} {...phases} {...blurFadeIn}>
          <div onClick={() => setContentModalOpen(false)} className={close}>
            <CloseIcon />
          </div>
          {modalContent}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
