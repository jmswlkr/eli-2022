import { Instagram, Facebook, LinkedIn } from '@/ui-components'

export const CONNECT = {
  label: 'Connect',
  links: [
    {
      id: 'calendar',
      text: 'Calendar',
      path: '/calendar'
    },
    {
      id: 'about',
      text: 'About',
      path: '/about'
    },
    {
      id: 'founder',
      text: 'Founder',
      path: '/founder'
    },
    {
      id: 'blog',
      text: 'Blog',
      path: '/blog'
    },
    {
      id: 'podcast',
      text: 'Podcast',
      path: '/podcast'
    }
  ]
}

export const OFFERINGS = {
  label: 'Offerings',
  links: [
    {
      text: 'All Offerings',
      path: '/offerings'
    },
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
    },
    {
      text: 'Events',
      path: '/offerings/training#events'
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
        embodiedlearninginstitute.com
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

export const NAVIGATION_DATA = {
  CONNECT,
  OFFERINGS,
  CONTACT
}
