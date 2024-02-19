'use client'

import { twm } from '@/utils'

import {
  container,
  title as titleStyle,
  left,
} from './section-header.module.scss'

export const SectionHeader = ({
  title = 'Section Title',
  alignLeft = false,
  classes = { container: '', title: 'head-2' }
}) => {
  return (
    <div className={twm(container, classes.container)}>
      <h2
        className={twm(
          'text-primary-500 tracking-widest mb-md',
          titleStyle,
          alignLeft ? left : '',
          classes.title
        )}
      >
        {title}
      </h2>
    </div>
  )
}
