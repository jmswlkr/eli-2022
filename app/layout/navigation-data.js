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
    path: '/offerings/consulting',
    content: 'Consulting',
    menu_content: (
      <>
        Customized
        <br />
        Consulting
      </>
    ),
  },
  {
    path: '/offerings/training',
    content: 'Training',
    menu_content: 'Transformational Training',
    menu_content: (
      <>
        Transformational
        <br />
        Training
      </>
    ),
  },
  {
    path: '/offerings/coaching',
    content: 'Coaching',
    menu_content: (
      <>
        Embodied
        <br />
        Coaching
      </>
    ),
  },
]

export const connectLinks = [
  {
    path: '/about',
    content: 'About ELI',
  },
  {
    path: '/founder',
    content: 'About the Founder',
  },
  {
    path: '/calendar',
    content: 'Calendar',
  },
]

export const socialIcons = [
  {
    id: 'IG',
    link: `https://wwww.Instagram.com/`,
    icon: <Instagram />,
  },
  {
    id: 'FB',
    link: `https://wwww.facebook.com/`,
    icon: <Facebook />,
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
    mobile_content: `Call us`,
    link: 'tel://+15707094277',
    icon: <PhoneIcon color='var(--accent)'/>
  },
  {
    id: 'email',
    label: 'Email',
    content: <>embodiedlearninginstitute<wbr/>@gmail.com</>,
    mobile_content: `Email us`,
    link: 'mailto:embodiedlearninginstitute@gmail.com',
    icon: <EmailIcon color='var(--accent)'/>
  },
]
