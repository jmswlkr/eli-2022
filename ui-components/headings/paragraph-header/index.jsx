import { twm } from '@/utils'

import { header } from './paragraph-header.module.scss'


export const ParagraphHeader = ({ headingText }) => {
  return (
    <h4 className={twm(header, 'head-4')}>{headingText}</h4>
  )
}
