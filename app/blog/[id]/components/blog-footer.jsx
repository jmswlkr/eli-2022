'use client';

import { useSocialMediaShare } from "hooks/useSocialMediaShare"
import { Facebook, Pinterest } from "ui-components/svg/social-icons"

import { footer, icons, linkIcon } from '../blog-single.module.scss'
import { LinkIcon } from "ui-components/svg/link-icon";

export function BlogFooter({ pageLink }){
  const handleFacebookShare = useSocialMediaShare('facebook')
  const handlePinterestShare = useSocialMediaShare('pinterest')

  return (
    <div className={footer}>
      <div className={icons}>
        <span onClick={() => handlePinterestShare(pageLink)}>
          {' '}
          <Pinterest fill='var(--primary)' />
        </span>
        <span onClick={() => handleFacebookShare(pageLink)}>
          {' '}
          <Facebook fill='var(--primary)' />
        </span>
        <span className={linkIcon} onClick={() => 'test'}>
          <LinkIcon fill='var(--primary)' />
        </span>
      </div>
      <a href='/blog'>Back to Blogs</a>
    </div>
  )
}
