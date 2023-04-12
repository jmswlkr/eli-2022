'use client'

import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { TopNav } from './top-nav/top-nav'
import { Footer } from './footer/footer'

import { layout, content } from './client-layout.module.scss'
import { Menu } from './menu/menu'

export const ClientLayout = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const { ref: heroRef, inView: heroInView } = useInView({
    initialInView: true,
  })

  return (
    <div className={layout}>
      <article id='portal' />
      <TopNav
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        showBG={!heroInView}
      />
      <Menu modalOpen={modalOpen} closeModal={() => setModalOpen(false)} />
      <main className={content}>
        <span className='vp-marker vp-marker__hero' ref={heroRef} />
        {children}
      </main>
      <Footer />
    </div>
  )
}
