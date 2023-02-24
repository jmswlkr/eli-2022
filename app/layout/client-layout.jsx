'use client';

// External lib
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

// Components
import { TopNav } from './top-nav/top-nav'
import { MenuModal } from './menu-modal/menu-modal'
import { Footer } from './footer/footer'

// Styling
import { layout, content } from './client-layout.module.scss'

export const ClientLayout = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const { ref: heroRef, inView: heroInView } = useInView({
    initialInView: true,
  })

  return (
    <div className={layout}>
      <article id='portal' />
      <TopNav
        toggleModal={() => setModalOpen(!modalOpen)}
        modalOpen={modalOpen}
        showBG={!heroInView}
      />
      <MenuModal modalOpen={modalOpen} closeModal={() => setModalOpen(false)} />
      <main className={content}>
        <span className='vp-marker vp-marker__hero' ref={heroRef} />
        {children}
      </main>
      <Footer />
    </div>
  )
}
