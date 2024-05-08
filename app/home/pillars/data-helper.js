import { StonesIcon, YogaIcon, ThoughtIcon, FlowerIcon } from '@/ui-components'

export function getPillarsDataFromContentfulProps(props) {

  const iconLookup = {
    sensibilities: <StonesIcon />,
    wisdom: <YogaIcon />,
    discernment: <ThoughtIcon />,
    living: <FlowerIcon />
  }

  const pillarCardEntries = props.pillarsCard.map((card) => {
    return {
      title: card.fields.heading,
      text: card.fields.paragraph,
      icon: iconLookup[card.fields.localId],
      cardRefId: card.fields.localId
    }
  })

  return {
    title: props.pillarsTitleSubtitle[0],
    subtitle: props.pillarsTitleSubtitle[1],
    paragraph: props.pillarsMainText,
    pillarCards: pillarCardEntries
  }
}
