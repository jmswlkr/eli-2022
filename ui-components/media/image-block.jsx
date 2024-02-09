import { twm } from '@/utils'

export const ImageBlock = ({ src, alt, classes }) => {
  return <img className={twm('absolute-img', classes)} src={src} alt={alt} />
}
