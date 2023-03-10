// * Small, convenient, reusable data stuctures. * //

import { EmailIcon } from 'ui-components/svg/email-icon'
import { PhoneIcon } from 'ui-components/svg/phone-icon'
import {
  Facebook,
  Instagram,
  LinkedIn,
} from 'ui-components/svg/social-icons'

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
    path: '/training',
    content: 'Training',
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
    icon: <PhoneIcon color='var(--accent)'/>
  },
  {
    id: 'email',
    label: 'Email',
    content: <>embodiedlearninginstitute<wbr/>@gmail.com</>,
    link: 'mailto:embodiedlearninginstitute@gmail.com',
    icon: <EmailIcon color='var(--accent)'/>
  },
]
