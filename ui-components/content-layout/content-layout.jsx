import React from 'react'

import { container } from './content-layout.module.scss'

export const ContentLayout = ({ children }) => {
  return <div className={container}>{children}</div>
}
