'use client'

import Link from 'next/link'
import dayjs from 'dayjs'

// import { CONNECT, CONTACT, OFFERINGS } from '../data'

export const Footer = ({ navData }) => {
  const { CONNECT, CONTACT, OFFERINGS } = navData;
    
  return (
    <footer className='bg-primary-600 full p-lg flex-col-bl lg:!items-center gap-lg text-[24px] tracking-[2px] text-white pt-xxl'>
      <div className='MAIN_LINKS_CONTAINER w-4/5 sm:!gap-lg lg:w-[var(--reading-content-width)] flex-col-tl w-full md:mb-lg lg:gap-[25vw] lg:gap-lg lg:!justify-between lg:!flex-row gap-lg'>
        <ul className='CONNECT_LINKS flex-col-tl gap-ms'>
          <li className='md:block meta-2 hidden'>{CONNECT.label}</li>
          {CONNECT.links.map((link) => {
            return (
              <li key={link.text}>
                <Link
                  className=' text-primary-150 hover:text-primary-900'
                  href={link.path}
                >
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className='OFFERINGS_LINKS flex-col-tl gap-ms'>
          <li className='md:block meta-2 hidden'>{OFFERINGS.label}</li>
          {OFFERINGS.links.map((link) => {
            return (
              <li key={link.text}>
                <Link
                  className=' text-primary-150 hover:text-primary-900'
                  href={link.path}
                >
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className='CONTACT_LINKS_DESK gap-md lg:flex flex-col items-start justify-end hidden text-sm'>
          <li className=' text-primary-150 hover:text-primary-900meta-2 lg:block hidden'>
            {CONTACT.label}
          </li>
          <li>
            <a className=' text-primary-150 hover:text-primary-900' href={CONTACT.email.link}>{CONTACT.email.display}</a>
          </li>
          <li>
            <a className=' text-primary-150 hover:text-primary-900' href={CONTACT.phone.link}>{CONTACT.phone.display}</a>
          </li>
          <li className='flex-tl gap-md items-center tracking-tight'>
            {CONTACT.socials.map((social) => {
              return (
                <a className='fill-white hover:fill-primary-900' key={social.id} href={social.link}>
                  {social.icon}
                </a>
              )
            })}
          </li>
        </ul>
      </div>
      <ul className='CONTACT_LINKS_MOBILE lg:!hidden flex-col-bl gap-md text-sm'>
        <li className='meta-2 lg:block hidden'>{CONTACT.label}</li>
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
