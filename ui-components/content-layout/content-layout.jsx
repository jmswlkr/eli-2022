import React from 'react'

import { container } from './content-layout.module.scss'

export const ContentLayout = ({ children, classes }) => {
  return <div className={`${container} ${classes}`}>{children}</div>
}
