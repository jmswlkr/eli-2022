import React from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'

import {
  connectLinks,
  contactInfo,
  pageLinks,
  socialIcons,
} from '../navigation-data'

import {
  footer,
  footerMain,
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
  desk,
  mobile
} from './footer.module.scss'

export const Footer = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0)
  }
  const currentYear = dayjs().format('YYYY')

  return (
    <footer className={footer}>
      <div className={footerMain}>
        <ul className={`${linkList} ${connectLinksStyle}`}>
          <label>Connect</label>
          {connectLinks.map((lnk) => {
            return (
              <li key={lnk.content}>
                <Link legacyBehavior href={lnk.path}>
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
                <Link legacyBehavior href={lnk.path}>
                  <a>{lnk.menu_content}</a>
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
                  <span className={desk}>{inf.content}</span>
                  <span className={mobile}>{inf.icon} {inf.label} us</span>
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
        <span className={copyright}>© {currentYear} Embodied Learning Institute </span>
      </div>
      <div className={btt}>
        <button className={bttBtn} onClick={scrollTop}>
          <span className={hidden}>Back to Top</span> ↑
        </button>
      </div>
    </footer>
  )
}
