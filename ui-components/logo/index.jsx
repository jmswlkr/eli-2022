import { IconMark } from '../svg/iconmark'

import { logoWrap, wordmarkText, wordmarkWrap, thin } from './logo.module.scss'


export const Logo = ({ color = 'var(--primary)', showFullText = false }) => {
  return (
    <div className={logoWrap}>
      <IconMark color={color} />
      <div className={wordmarkWrap}>
        <span className={wordmarkText}>Embodied</span>
        <span className={wordmarkText}>Learning</span>
        <br />
        <span className={`${wordmarkText} ${thin}`}>Institute</span>
      </div>
    </div>
  )
}
