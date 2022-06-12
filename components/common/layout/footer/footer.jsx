// External lib
import {
  connectLinks,
  contactInfo,
  pageLinks,
  socialIcons,
} from '@/ancillary/small-data'
import Link from 'next/link'
import React from 'react'

// Styling
import {
  footer,
  footerMain,
  linkList,
  connectLinksStyle,
  pageLinksStyle,
  contactLinks,
  footerFoot,
  social,
  copyright,
  bttBtn,
  hidden,
} from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={footer}>
      <div className={footerMain}>
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
        <ul className={`${linkList} ${contactLinks}`}>
          {contactInfo.map((inf) => {
            return (
              <li key={inf.id}>
                <label>{inf.label}</label>
                <a
                  href={inf.link}
                  target='_blank'
                  rel='noreferrer'
                >
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
              <a
                key={icn.id}
                href={icn.link}
                target='_blank'
                rel='noreferrer'
              >
                {icn.icon}
              </a>
            )
          })}
        </ul>
        <span className={copyright}>
          © 2022 Embodied learning institute{' '}
        </span>
        <button className={bttBtn}>↑<span className={hidden}>Back to Top</span></button>
      </div>
    </footer>
  )
}
