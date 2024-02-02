import { twm } from '@/utils/tailwind/tw-merge'

export const ContentfulImageBlock = ({ contentfulData, classes }) => {
  const src = contentfulData.fields.file.url
  const alt = contentfulData.fields.title

  return <img className={twm('absolute-img', classes)} src={src} alt={alt} />
}
