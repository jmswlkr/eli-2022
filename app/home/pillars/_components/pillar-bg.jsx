import { baseUrl } from '@/utils'

export function PillarsBG() {
  return (
    <div className='BG_IMAGE_WRAP bg-primary-900 absolute-center z-40 w-screen h-full'>
      <div className='SHADE_COLOR bg-gradient-to-r from-primary-500/70 to-accent-300/50 absolute-shade full z-40' />
      <div className='SHADE_DARK bg-black/80 absolute-shade full z-30' />
      <img
        className='absolute-img saturate-[20%] z-20'
        src={baseUrl('center-tree_jxzinq', 'good')}
        alt='a large sequoia tree centered in the frame'
      />
      <img
        className='absolute-img saturate-[20%] z-10'
        src={baseUrl('BG_no-tree_fsmhkc', 'good')}
        alt='a grove of sequoia trees'
      />
    </div>
  )
}
