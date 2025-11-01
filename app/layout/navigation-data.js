// * Small, convenient, reusable data stuctures. * //

import { EmailIcon } from '@/ui-components'
import { PhoneIcon } from '@/ui-components'
import { Facebook, Instagram, LinkedIn } from '@/ui-components'

export const pageLinks = [
  {
    path: '/offerings/training#events',
    content: 'Events'
  },
  {
    path: '/blog',
    content: 'Blog'
  },
  {
    path: '/podcast',
    content: 'Podcast'
  },
  {
    path: '/book',
    content: 'Book'
  },
  {
    path: '/offerings/consulting',
    content: 'Consulting'
  },
  {
    path: '/offerings/training',
    content: 'Training',
    menu_content: 'Transformational Training'
  },
  {
    path: '/offerings/coaching',
    content: 'Coaching'
  },
  {
    path: '/calendar',
    content: 'Schedule'
  }
]

export const connectLinks = [
  {
    path: '/about',
    content: 'About ELI'
  },
  {
    path: '/founder',
    content: 'About the Founder'
  },
  {
    path: '/calendar',
    content: 'Calendar'
  },
  {
    path: '/blog',
    content: 'Blog'
  }
]

export const socialIcons = [
  {
    id: 'IG',
    link: `https://wwww.Instagram.com/`,
    icon: <Instagram />
  },
  {
    id: 'FB',
    link: `https://wwww.facebook.com/`,
    icon: <Facebook />
  },
  {
    id: 'LI',
    link: `https://wwww.linkedin.com/`,
    icon: <LinkedIn />
  }
]

export const contactInfo = [
  {
    id: 'Phone',
    label: 'Phone',
    content: `+1 (570) 709 4277`,
    mobile_content: `Call us`,
    link: 'tel://+15707094277',
    icon: <PhoneIcon color='currentColor' />
  },
  {
    id: 'email',
    label: 'Email',
    content: (
      <>
        info@
        <wbr />
        embodiedlearninginstitute.com
      </>
    ),
    mobile_content: `Email us`,
    link: 'mailto:info@embodiedlearninginstitute.com',
    icon: <EmailIcon color='currentColor' />
  }
]
