import { FlowerIcon, StonesIcon, YogaIcon } from '@/elements/svg/pillar-icons'

export const pillarData = [
  {
    id: 'ss',
    title: 'Somatic Sensibilities',
    imgSlug: 'under-current_v9teqk',
    text: (
      <>
        When we hone our somatic sensibilities, we connect with our sensations
        and feelings, learn how to respond from a space of engaged equanimity,
        and spend more time living in the now.
      </>
    ),
    icon: <FlowerIcon color='var(--primary-tr)' />,
    color: {
      p: 'var(--primary)',
      s: 'var(--primary-tr)',
    },
  },
  {
    id: 'wp',
    title: 'Wholehearted Presence',
    imgSlug: 'splashing_uqohfm',
    text: (
      <>
        When we engage life from the space of wholehearted presence, we bring an
        unrelentless compassion for ourselves and others. This embodied state is
        grounded in understanding, generative gratitude, humility, and
        individual/collective healing.
      </>
    ),
    icon: <YogaIcon color='var(--emph-tr)' />,
    color: {
      p: 'var(--emph-color)',
      s: 'var(--emph-tr)',
    },
  },
  {
    id: 'dd',
    title: 'Dynamic Discernment',
    imgSlug: 'stone-stack_ztdlzn',
    text: (
      <>
        {/* We all are situated within multiple interconnected and interrelated systems that shape our entire soma. Our ability to see these emergent systems from a mindful space, experience them with an open heart, and listen to the intuition we receive from our gut allows for dynamic discernment. */}
        We all are situated within multiple interconnected and interrelated
        systems that shape our entire soma. Dynamic discernment is a space of
        embodied interconnection where we recognize our habitual patterns,
        respond from a grounded space, and engage our intuition and imagination.
      </>
    ),
    icon: <StonesIcon color='var(--accent-tr)' />,
    color: {
      p: 'var(--accent)',
      s: 'var(--accent-tr)',
    },
  },
  {
    id: 'll',
    title: 'Leaderful Learning',
    imgSlug: 'stone-stack_ztdlzn',
    text: (
      <>
        Transformational relationships are built and sustained through
        interdependence and mutual learning. When we create shared vision,
        embrace collective co-creation, and take action from a space of
        collective awareness we are engaging in leadership living and learning.
      </>
    ),
    icon: <StonesIcon color='var(--accent-tr)' />,
    color: {
      p: 'var(--accent)',
      s: 'var(--accent-tr)',
    },
  },
]
