import React from 'react'

import { container } from './content-layout.module.scss'
import { twm } from '@utils/tailwind/tw-merge'

export const ContentLayout = ({ children, classes = '' }) => {
  return <div className={twm(`CONTENT_LAYOUT ${container} ${classes}`)}>{children}</div>
}
