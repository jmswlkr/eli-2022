// External lib
import {
  connectLinks,
  contactInfo,
  pageLinks,
  socialIcons,
} from '@/ancillary/small-data'
import { WaveCircles } from '@/elements/svg/wave-circles'
import Link from 'next/link'
import React from 'react'

// Styling
import {
  footer,
  footerMain,
  sectionAccent,
  linkList,
  mobileDivider,
  connectLinksStyle,
  pageLinksStyle,
  contactLinks,
  footerFoot,
  social,
  copyright,
  btt,
  bttBtn,
  hidden,
} from './footer.module.scss'

export const Footer = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className={footer}>
      <div className={footerMain}>
        <div className={sectionAccent}>
          <WaveCircles />
        </div>
        <ul className={`${linkList} ${connectLinksStyle}`}>
          <label>Connect</label>
          {connectLinks.map((lnk) => {
            return (
              <li key={lnk.content}>
                <Link href={lnk.path}>
                  <a>{lnk.content}</a>
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className={`${linkList} ${pageLinksStyle}`}>
          <label>Site</label>
          {pageLinks.map((lnk) => {
            return (
              <li key={lnk.content}>
                <Link href={lnk.path}>
                  <a>{lnk.content}</a>
                </Link>
              </li>
            )
          })}
        </ul>
        <span className={mobileDivider} />
        <ul className={`${linkList} ${contactLinks}`}>
          {contactInfo.map((inf) => {
            return (
              <li key={inf.id}>
                <label>{inf.label}</label>
                <a href={inf.link} target='_blank' rel='noreferrer'>
                  {inf.content}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={footerFoot}>
        <ul className={social}>
          {socialIcons.map((icn) => {
            return (
              <a key={icn.id} href={icn.link} target='_blank' rel='noreferrer'>
                {icn.icon}
              </a>
            )
          })}
        </ul>
        <span className={copyright}>© 2022 Embodied learning institute </span>
      </div>
      <div className={btt}>
        <button className={bttBtn} onClick={scrollTop}>
          <span className={hidden}>Back to Top</span> ↑
        </button>
      </div>
    </footer>
  )
}
