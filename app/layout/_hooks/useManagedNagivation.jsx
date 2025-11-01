import { useContentfulEntryByParams } from '../../../contentful/hooks/useContentfulEntryByParams'

import { CONNECT, OFFERINGS, CONTACT } from '../data'
import { pageLinks, connectLinks, contactInfo } from '../navigation-data'

export const useManagedNavigation = async ({ draftEnabled }) => {
  const contentVisibility = await useContentfulEntryByParams({
    preview: draftEnabled,
    params: {
      content_type: 'pageManager',
      include: 10,  
      limit: 2
    }
  })

  // Boolean properties with keys: 'blog', 'podcast', 'book'
  const visiblePages = contentVisibility.entry.items[0].fields
  const pagePrefs = contentVisibility.entry.items[0].fields

  const contentfulManagedNav = {};

  Object.entries({ pageLinks, connectLinks, contactInfo }).forEach(([sectionKey, section]) => {
    const filteredSection = section.filter((link) => {
      const prefsKey = typeof link?.content === 'string' ? link.content.toLowerCase() : '';
      const isHidden = pagePrefs[prefsKey] === false;
      return !isHidden;
    })
    contentfulManagedNav[sectionKey] = filteredSection;
  })

  const filteredConnectLinks = CONNECT.links.filter((link) => {
    const show = visiblePages[link.id] // will return boolean toggle state 
    const isNotManaged = visiblePages[link.id] === undefined
  
    const shouldShow = show || isNotManaged

    return shouldShow;
  })

  const filteredConnects = { ...CONNECT, links: filteredConnectLinks }

  return { CONNECT, OFFERINGS, CONTACT, ...contentfulManagedNav};
}
