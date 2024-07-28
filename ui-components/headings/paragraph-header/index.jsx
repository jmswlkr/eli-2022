import { twm } from '@/utils'

import { header } from './paragraph-header.module.scss'


export const ParagraphHeader = ({ headingText }) => {
  return (
    <h4 className={twm(header, 'head-3 font-bold')}>{headingText}</h4>
  )
}
