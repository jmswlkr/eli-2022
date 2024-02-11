'use client'

import Link from 'next/link'
import dayjs from 'dayjs'

import { CONNECT, CONTACT, OFFERINGS } from '../data'

export const Footer = () => {
  return (
    <footer className='bg-primary-600 full p-lg flex-col-bl lg:!items-center gap-lg text-[24px] tracking-[2px] text-white pt-xxl'>
      <div className='MAIN_LINKS_CONTAINER lg:w-[var(--reading-content-width)] flex-col-tl w-full md:mb-lg md:gap-[25vw] lg:gap-lg lg:!justify-between md:!flex-row gap-lg'>
        <ul className='CONNECT_LINKS flex-col-tl gap-ms'>
          <span className='md:block text-primary-150 meta-2 hidden'>
            {CONNECT.label}
          </span>
          {CONNECT.links.map((link) => {
            return (
              <li key={link.text}>
                <Link href={link.path}>{link.text}</Link>
              </li>
            )
          })}
        </ul>
        <ul className='OFFERINGS_LINKS flex-col-tl gap-ms'>
          <span className='md:block text-primary-150 meta-2 hidden'>
            {OFFERINGS.label}
          </span>
          {OFFERINGS.links.map((link) => {
            console.log('link: ', link)
            return (
              <li key={link.text}>
                <Link href={link.path}>{link.text}</Link>
              </li>
            )
          })}
        </ul>
        <ul className='CONTACT_LINKS_DESK lg:flex flex-col-bl gap-md hidden text-sm'>
          <span className='meta-2 lg:block hidden'>{CONTACT.label}</span>
          <li>
            <a href={CONTACT.email.link}>{CONTACT.email.display}</a>
          </li>
          <li>
            <a href={CONTACT.phone.link}>{CONTACT.phone.display}</a>
          </li>
          <li className='flex-tl gap-md items-center tracking-tight'>
            {CONTACT.socials.map((social) => {
              return (
                <a className='fill-white' key={social.id} href={social.link}>
                  {social.icon}
                </a>
              )
            })}
          </li>
        </ul>
      </div>
      <ul className='CONTACT_LINKS lg:!hidden flex-col-bl gap-md text-sm'>
        <span className='meta-2 lg:block hidden'>{CONTACT.label}</span>
        <li>
          <a href={CONTACT.email.link}>{CONTACT.email.display}</a>
        </li>
        <li>
          <a href={CONTACT.phone.link}>{CONTACT.phone.display}</a>
        </li>
        <li className='flex-tl gap-md items-center tracking-tight'>
          {CONTACT.socials.map((social) => {
            return (
              <a className='fill-white' key={social.id} href={social.link}>
                {social.icon}
              </a>
            )
          })}
        </li>
      </ul>
      <div className='text-[16px] font-light'>
        © {dayjs().format('YYYY')} Embodied Learning Institute{' '}
      </div>
    </footer>
  )
}
