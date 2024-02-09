import { twm } from '@/utils'

export const ContentfulImageBlock = ({ contentfulImage, classes }) => {
  const src = contentfulImage.fields.file.url
  const alt = contentfulImage.fields.title

  return <img className={twm('absolute-img', classes)} src={src} alt={alt} />
}
