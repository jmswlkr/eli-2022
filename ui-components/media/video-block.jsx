import { twm } from '@/utils'

export const VideoBlock = ({ src, classes }) => {
  return (
    <video
      key='video_1'
      className={twm('VIDEO_BLOCK', classes)}
      src={src}
      autoPlay
      loop
      muted
    />
  )
}
