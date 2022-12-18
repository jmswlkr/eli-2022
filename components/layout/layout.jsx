// External lib
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

// Components
import { TopNav } from './top-nav/top-nav'
import { MenuModal } from './menu-modal/menu-modal'

// Styling
import { layout, content } from './layout.module.scss'
import { Footer } from './footer/footer'

export const Layout = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const { ref: introRef, inView: introInView } = useInView()
  const { ref: pillarsRef, inView: pillarsInView } = useInView()

  return (
    <div className={layout}>
      <TopNav
        toggleModal={() => setModalOpen(!modalOpen)}
        modalOpen={modalOpen}
        introInView={introInView}
        light={introInView || pillarsInView}
      />
      <MenuModal
        modalOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
      />
      <main className={content}>
        <span
          className='vp-marker vp-marker__hero'
          ref={introRef}
        />
        <span
          className='vp-marker vp-marker__pillars'
          ref={pillarsRef}
        />
        {children}
      </main>
      <Footer />
    </div>
  )
}
