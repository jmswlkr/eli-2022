export const useSocialMediaShare = ({ platform_name, share_link }) => {
  const shareLinkMap = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=`,
    pinterest: `https://pinterest.com/pin/create/button/?url=`
  }

  function handleShareClick() {
    const shareUrl = `${shareLinkMap[platform_name]}${encodeURIComponent(
      share_link
    )}`
    window.open(shareUrl, '_blank')
  }

  return handleShareClick
}