'use client';

import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSearchParams } from 'next/navigation';

import { TopNav } from './top-nav/top-nav'
import { MenuModal } from './menu-modal/menu-modal'
import { Footer } from './footer/footer'

import { layout, content } from './client-layout.module.scss'
import { useScrollLinks } from 'hooks/useScrollLinks';

export const ClientLayout = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const { ref: heroRef, inView: heroInView } = useInView({
    initialInView: true,
  })

  // useScrollLinks()

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
