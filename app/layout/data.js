import { Instagram, Facebook, LinkedIn } from '@/ui-components'

export const CONNECT = {
  label: 'Connect',
  links: [
    {
      text: 'Calendar',
      path: '/calendar'
    },
    {
      text: 'About',
      path: '/about'
    },
    {
      text: 'Founder',
      path: '/founder'
    },
    {
      text: 'Blog',
      path: '/blog'
    }
  ]
}

export const OFFERINGS = {
  label: 'Offerings',
  links: [
    {
      text: 'Coaching',
      path: '/offerings/coaching'
    },
    {
      text: 'Consulting',
      path: '/offerings/consulting'
    },
    {
      text: 'Training',
      path: '/offerings/training'
    }
  ]
}

export const CONTACT = {
  label: 'Contact',
  phone: {
    display: '+1 (570) 709 4277',
    link: 'tel://+15707094277'
  },
  email: {
    display: (
      <>
        info@
        <wbr />
        embodiedlearninginstitute.org
      </>
    ),
    link: 'mailto:info@embodiedlearninginstitute.com'
  },
  socials: [
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
}
