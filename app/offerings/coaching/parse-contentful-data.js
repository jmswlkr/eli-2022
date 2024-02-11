export function parseContentfulData(content) {
  const introContent = [
    {
      heading: content.mainContent1Heading,
      paragraph: content.mainContent1Paragraph
    },
    {
      heading: content.mainContent2Heading,
      paragraph: content.mainContent2Paragraph
    }
  ]

  const coachingContent = [
    {
      heading: content.card1Heading,
      paragraph: content.card1Paragraph
    },
    {
      heading: content.card2Heading,
      paragraph: content.card2Paragraph
    },
    {
      heading: content.card3Heading,
      paragraph: content.card3Paragraph
    },
    {
      heading: content.card4Heading,
      paragraph: content.card4Paragraph
    },
    {
      heading: content.card5Heading,
      paragraph: content.card5Paragraph
    }
  ]

  return { intro: introContent, coaching: coachingContent }
}
