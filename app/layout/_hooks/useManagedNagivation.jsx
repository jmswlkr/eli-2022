import { useContentfulEntryByParams } from '../../../contentful/hooks/useContentfulEntryByParams'

import { CONNECT, OFFERINGS, CONTACT } from '../data'

export const useManagedNavigation = async ({ draftEnabled }) => {
  const contentVisibility = await useContentfulEntryByParams({
    preview: draftEnabled,
    params: {
      content_type: 'pageManager',
      include: 10,  
      limit: 2
    }
  })

  const visiblePages = contentVisibility.entry.items[0].fields

  const filteredConnectLinks = CONNECT.links.filter((link) => {
    const isHidden = visiblePages[link.id] // will return boolean toggle state 
    const isNotManaged = visiblePages[link.id] === undefined
  
    const shouldShow = !isHidden && isNotManaged

    return shouldShow;
  })

  const filteredConnects = { ...CONNECT, links: filteredConnectLinks }

  return { CONNECT: filteredConnects, OFFERINGS, CONTACT }
}
