// * Small, convenient, reusable data stuctures. * //

import {
  Facebook,
  Instagram,
  LinkedIn,
} from 'components/elements/svg/social-icons'

export const pageLinks = [
  {
    path: '/offerings/consulting',
    content: 'Consulting',
  },
  {
    path: '/offerings/coaching',
    content: 'Coaching',
  },
  {
    path: '/offerings/training',
    content: 'Training',
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
    path: '/',
    content: 'Resources',
  },
  {
    path: '/',
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
    link: 'mailto:info@eli.orgs',
  },
]

export const testimonialData = [
  {
    path: '/',
    text: <b>Compassionate</b>,
    videoThumb:
      'https://res.cloudinary.com/jameswalker-work/image/upload/v1674480597/ELI/alyona_a9urqh.png',
    videoUrl:
      'https://res.cloudinary.com/jameswalker-work/video/upload/v1674480601/ELI/Alyona__compressed_mj9qve.mp4',
    name: 'Alyona K.',
  },
  {
    path: '/',
    text: <b>Attentive</b>,
    videoThumb:
      'https://res.cloudinary.com/jameswalker-work/image/upload/v1674479639/ELI/maria_lvifjh.png',
    videoUrl:
      'https://res.cloudinary.com/jameswalker-work/video/upload/v1674479393/ELI/Maria__compressed_zwtmci.mp4',
    name: 'Maria A.',
  },
  {
    path: '/',
    text: (
      <>
        <b>Transformational</b>{' '}
        <span>
          Working with Alison was transformational. She's incredibly
          knowledgeable, open, and compassionate. Her deep listening and
          presence, in combination with her observations and insights, created
          the space I needed for personal growth.
        </span>
      </>
    ),
    name: 'Lisa R.',
  },
  {
    path: '/',
    text: (
      <>
        <b>Insightful</b>
        <span>
          Alison is excellent at facilitating insightful group discussion. She
          brought a deep sense of acceptance and compassion that allowed group
          participants to explore challenging topics in a safe and supportive
          context.
        </span>
      </>
    ),
    name: 'Gary M.',
  },
  {
    path: '/',
    text: (
      <>
        <b>Life Changing</b>{' '}
        <span>
          Alison’s workshop helped me to spend less time in my head and more
          time in my body. It was a life-changing experience that has enabled me
          to be a more present, authentic, and grounded leader.
        </span>
      </>
    ),
    name: 'Diane W.',
  },
]
