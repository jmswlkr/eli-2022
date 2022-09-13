// * Small, convenient, reusable data stuctures. * //

import { Facebook, Instagram, LinkedIn } from "components/elements/svg/social-icons"

export const pageLinks = [
  {
    path: '/consulting',
    content: 'Consulting',
  },
  {
    path: '/coaching',
    content: 'Coaching',
  },
  {
    path: '/education',
    content: 'Education',
  },
  {
    path: '/calendar',
    content: 'Calendar',
  },
]

export const connectLinks = [
  {
    path: '/about',
    content: 'About',
  },
  {
    path: '/#contact',
    content: 'Contact',
  },
  {
    path: '/resources',
    content: 'Resources',
  },
  {
    path: '/partners',
    content: 'Partners',
  },
]

export const socialIcons = [
  {
    id: 'FB',
    link: `https://wwww.facebook.com/`,
    icon: <Facebook />,
  },
  {
    id: 'IG',
    link: `https://wwww.Instagram.com/`,
    icon: <Instagram />,
  },
  {
    id: 'LI',
    link: `https://wwww.linkedin.com/`,
    icon: <LinkedIn />,
  },
]


export const contactInfo = [
  {
    id: 'location',
    label: 'Visit Us',
    content: `5524 Rathbun Rd Cazenovia, NY 13035`,
    link: 'https://goo.gl/maps/SKCSy7Daqr5Xm7sr9',
  },
  {
    id: 'Phone',
    label: 'Phone',
    content: `+1 (570) 709 4277`,
    link: 'tel://+15707094277',
  },
  {
    id: 'email',
    label: 'Email',
    content: `info@eli.org`,
    link: 'mailto:info@eli.org',
  },
]


export const testimonialData = [
  {
    path: '/',
    text: (
      <>
        <b>Life changing.</b> tempor risus lectus, eu bibendum eros
        fermentum quis. Mauris faucibus eros nec tristique
        volutpat. Quisque hendrerit mauris odio.
      </>
    ),
    avatarUrl: '/red-sweater.png',
    initials: 'Gabrielle D.',
  },
  {
    path: '/',
    text: (
      <>
        <b>Incredible.</b> tempor risus lectus, eu bibendum eros
        fermentum quis. Mauris faucibus eros nec tristique
        volutpat. Quisque hendrerit mauris odio.
      </>
    ),
    avatarUrl: '/turtleneck.png',
    initials: 'Leslie C.',
  },
  {
    path: '/',
    text: (
      <>
        <b>Fulfilling.</b> tempor risus lectus, eu bibendum eros
        fermentum quis. Mauris faucibus eros nec tristique
        volutpat. Quisque hendrerit mauris odio.
      </>
    ),
    avatarUrl: '/glasses.png',
    initials: 'Mandy L.',
  },
  {
    path: '/',
    text: (
      <>
        <b>Opening.</b> tempor risus lectus, eu bibendum eros
        fermentum quis. Mauris faucibus eros nec tristique
        volutpat. Quisque hendrerit mauris odio.
      </>
    ),
    avatarUrl: '/red-sweater.png',
    initials: 'Victor M.',
  },
  {
    path: '/',
    text: (
      <>
        <b>Brilliant.</b> tempor risus lectus, eu bibendum eros
        fermentum quis. Mauris faucibus eros nec tristique
        volutpat. Quisque hendrerit mauris odio.
      </>
    ),
    avatarUrl: '/sport-girl.png',
    initials: 'Andrew W.',
  },
]

