'use client'

import { useSocialMediaShare } from 'hooks/useSocialMediaShare'
import { Facebook, Pinterest } from 'ui-components/svg/social-icons'

import { LinkIcon } from 'ui-components/svg/link-icon'

export function BlogFooter({ pageLink }) {
  const handleFacebookShare = useSocialMediaShare('facebook')
  const handlePinterestShare = useSocialMediaShare('pinterest')

  return (
    <div className='FOOTER border-t-[.5px] border-primary-500 flex items-start md:items-center gap-lg justify-start flex-col md:flex-row md:justify-between pt-md w-full'>
      <div className='ICONS flex-tl gap-md hover:fill-primary-900'>
        <span
          className='stroke-primary-500 hover:stroke-primary-900'
          onClick={() => handlePinterestShare(pageLink)}
        >
          <Pinterest />
        </span>
        <span
          className='fill-primary-500 hover:fill-primary-900'
          onClick={() => handleFacebookShare(pageLink)}
        >
          <Facebook />
        </span>
        <span
          className='stroke-primary-500 hover:stroke-primary-900'
          onClick={() => 'test'}
        >
          <LinkIcon />
        </span>
      </div>
      <a className='BACK_BUTTON meta-1 text-primary-500' href='/blog'>
        Back to Blogs →
      </a>
    </div>
  )
}
