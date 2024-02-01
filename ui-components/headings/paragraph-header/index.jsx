import { header } from './paragraph-header.module.scss'

export const ParagraphHeader = ({ headingText }) => {
  return (
    <h4 className={header}>{headingText}</h4>
  )
}
