import { breakWords } from '@/utils'

import { StonesIcon, YogaIcon, ThoughtIcon, FlowerIcon } from '@/ui-components'

export function getPillarsDataFromContentfulProps(props) {

  const contentfulPillars = [
    {
      id: 'sensibilities-01',
      title: breakWords(props.pillarsCard1Title),
      text: props.pillarsCard1Text,
      icon: <StonesIcon />
    },
    {
      id: 'presence-02',
      title: breakWords(props.pillarsCard2Title),
      text: props.pillarsCard2Text,
      icon: <YogaIcon />
    },
    {
      id: 'discernment-03',
      title: breakWords(props.pillarsCard3Title),
      text: props.pillarsCard3Text,
      icon: <ThoughtIcon />
    },
    {
      id: 'learning-04',
      title: breakWords(props.pillarsCard4Title),
      text: props.pillarsCard4Text,
      icon: <FlowerIcon />
    }
  ]

  return {
    title: props.pillarsTitleSubtitle[0],
    subtitle: props.pillarsTitleSubtitle[1],
    paragraph: props.pillarsMainText,
    pillars: contentfulPillars
  }

}