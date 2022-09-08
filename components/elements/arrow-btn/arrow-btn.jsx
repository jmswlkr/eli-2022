import Link from 'next/link';
import React from 'react'

import { arrowBtn as btnStyle, light } from './arrow-btn.module.scss';

export const ArrowBtn = ({
  text = 'Learn More',
  lightText = false,
  pageLink = '/',
  arrowColor = 'var(--emph-color)',
}) => {


  return (
    <Link href={pageLink}>
      <button className={btnStyle}>
        <span className={`${lightText && light}`}>{text}</span>
        <span>
          <svg
            width='97'
            height='30'
            viewBox='0 0 97 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M83.3536 15.3536C83.5488 15.1583 83.5488 14.8417 83.3536 14.6464L80.1716 11.4645C79.9763 11.2692 79.6597 11.2692 79.4645 11.4645C79.2692 11.6597 79.2692 11.9763 79.4645 12.1716L82.2929 15L79.4645 17.8284C79.2692 18.0237 79.2692 18.3403 79.4645 18.5355C79.6597 18.7308 79.9763 18.7308 80.1716 18.5355L83.3536 15.3536ZM0 15.5H83V14.5H0V15.5Z'
              fill={arrowColor}
            />
            <circle
              cx='82'
              cy='15'
              r='14.75'
              stroke={arrowColor}
              strokeWidth='0.5'
            />
          </svg>
        </span>
      </button>
    </Link>
  )
}
