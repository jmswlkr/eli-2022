// * Small, convenient, reusable data stuctures. * //

import {
  Facebook,
  Instagram,
  LinkedIn,
} from 'ui-components/svg/social-icons'

export const pageLinks = [
  {
    path: '/organizational-consulting',
    content: 'Consulting',
  },
  {
    path: '/leadership-coaching',
    content: 'Coaching',
  },
  {
    path: '/collaborative-learning',
    content: 'Collaboration',
  },
  {
    path: '/about',
    content: 'About ELI',
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
    id: 'Phone',
    label: 'Phone',
    content: `+1 (570) 709 4277`,
    link: 'tel://+15707094277',
  },
  {
    id: 'email',
    label: 'Email',
    content: <>embodiedlearninginstitute<wbr/>@gmail.com</>,
    link: 'mailto:embodiedlearninginstitute@gmail.com',
  },
]
