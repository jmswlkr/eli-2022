export function extractOfferingsContent(content) {
  const c = content

  return [
    {
      title: c.coachingHeading,
      text: c.coachingDescriptionText,
      path: '/offerings/coaching',
      list_header: c.coachingListHeader,
      details_list: c.coachingWhoItsForList,
      image: {
        url:
          c.coachingBgImage?.fields?.file?.url ??
          'https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:good/v1678942214/ELI/coaching--hero_tv4phy.png',
        alt_text:
          c.coachingBgImage?.fields?.description ??
          '' ??
          'rolling golden brush covered hills with stairs etched into the hillside. A traveler stands atop the closest hill',
      },
      buttonText: c.coachingButtonText,
    },
    {
      title: c.consultingHeading,
      text: c.consultingDescriptionText,
      path: '/offerings/consulting',
      list_header: c.consultingListHeader,
      details_list: c.consultingWhoItsForList,
      image: {
        url:
          c.consultingBgImage?.fields?.file?.url ??
          'https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:good/v1678942217/ELI/consulting--hero_ojgg66.png',
        alt_text:
          c.consultingBgImage?.fields?.description ??
          '' ??
          'treacherous looking mountains partially covered in snow under a bright sun.',
      },
      buttonText: c.consultingButtonText,
    },
    {
      title: c.trainingHeading,
      text: c.trainingDescriptionText,
      path: '/offerings/training',
      list_header: c.trainingListHeader,
      details_list: c.trainingWhoItsForList,
      image: {
        url:
          c.trainingBgImage?.fields?.file?.url ??
          'https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:good/v1678942217/ELI/training--hero_aa43s7.png',
        alt_text:
          c.trainingBgImage?.fields?.description ??
          '' ??
          '3 distant travelers in awe of a waterfall, large red rocks in foreground.',
      },
      buttonText: c.trainingButtonText,
    },
  ]
}
