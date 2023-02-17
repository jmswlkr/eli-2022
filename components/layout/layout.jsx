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
