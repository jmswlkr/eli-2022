import Link from 'next/link'

export const HERO_CONTENT = {
  header: [
    'About the',
    'Founder',
    <>
      Alison Brzenchek <br /> MSW, Ph.D
    </>,
  ],
  image: {
    url: 'https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:good/v1678126825/ELI/founder-ratioed_jmlezw.png',
    alt_text: 'The founder of ELI, Alison Brzencheck MSW, Ph.D',
  },
}

export const QUOTE_CONTENT = {
  quote:
    'We are steeped in the normalized myth that we are, each of us, mere individuals striving to attain private goals. The more we define ourselves that way, the more estranged we become from the vital aspects of who we are and what we need to be healthy.',
  author: 'Gabor Maté',
  source: 'The Myth of Normal: Trauma, Illness and Healing in a Toxic Culture',
}

export const INTRO_CONTENT = {
  about: (
    <>
      <em>Welcome,</em> I’m Ali Brzenchek, the founder of the Embodied Learning
      Institute (ELI). My life’s passion is to generate a cultural shift toward
      embodied learning:  This holistic and expansive way of being embraces
      universal interconnectivity, relies on practice-based transformation,
      promotes the process of integration; and enables collective growth and
      well-being.
    </>
  ),
  credentials: [
    {
      primary: 'International Coaching Federation',
      secondary: 'Member since 2022',
    },
    {
      primary: 'Doctorate of Philosophy (Ph.D) - Communication',
      secondary: 'University of Massachusetts, 2014',
    },
    {
      primary: 'Master of Social Work (MSW)',
      secondary: 'University of Michigan, 1995',
    },
    {
      primary:
        'Bachelor of Science (BS) - Human Development and Family Studies',
      secondary: 'Pennsylvania State University, 1993',
    },
  ],
}

export const BODY_CONTENT = [
  {
    paragraph: (
      <>
        Embodied learning is a space of transformation in a global capitalist
        consumer culture that promotes: scarcity, individualism, competition,
        fragmentation, disconnection, and disembodiment. When we are guided by
        this myth, our body contracts. We rely solely on the presumed merits of
        our “rational” mind. We engage from the space of linear thinking. We
        become disconnected from our heart and gut.
      </>
    ),
  },
  {
    paragraph: (
      <>
        I developed the four pillars of Embodied Enoughness –{' '}
        <Link href='/#pillars' className='em-link'>
          <em>
            somatic sensibilities, wholehearted presence, dynamic discernment,
            and leaderful living
          </em>
        </Link>{' '}
        – to challenge the cultural status quo. These pillars are a
        practice-based way of living that help individuals, communities, and
        organizations thrive.
      </>
    ),
  },
  {
    paragraph: (
      <>
        My path to founding ELI is grounded in a rich tapestry of life
        experiences that span my personal, educational, and professional
        development. Below, you can learn about my Embodied Enoughness journey.
      </>
    ),
  },
]

export const STORY_CONTENT = {
  before: {
    title: 'My Embodied Enoughness Journey',
    paragraphs: [
      <>
        I’m a CIS, white, middle-class, woman who spent a great deal of my life
        trying to avoid feelings and sensations. I lived in my head. My
        hypervigilance and disconnection from my body limited my agency.
      </>,
      <>
        <br />
        When I was under stress, I didn’t recognize my bodily sensations and
        feelings. Instead, I reacted to external cues from people and my
        environment.
      </>,
      <>
        When things were going well. When it seemed like I was in control. When
        I accomplished what I set out to... <br /> I was semi-satisfied with
        life.
      </>,
      <>
        When major challenges arose, as they always do, I pushed back hard. I
        tried to force things. I saw myself as a victim. I couldn’t understand
        why bad things always happened to me. I couldn’t understand why I was
        not getting what I wanted.
      </>,
    ],
  },
  after: {
    title: 'Learning to Thrive',
    paragraphs: [
      <>
        <em>Somatics changed that for me</em>. I learned (and I’m still
        learning) to thrive! To live from a space of expansion. To recognize I am a complex human being with many overdeveloped and underdeveloped
        parts. These parts are not good or bad. I tried the good/bad dichotomy, it was very unproductive and caused much unneeded pain and suffering.
      </>,
      <>
        Alternatively, expansion and contraction are terms that draw attention to bodily experiences. To sensations and feelings. I have some really overdeveloped parts that tend to make me smaller and tighter. They shrink my heart space, head space, and gut space. They limit my vision. These overdeveloped parts are built into my nervous system.
      </>,
      <>
        Today, instead of responding from a space of reactivity, I am much more likely to turn to my{' '}
        <Link href='/' className='em-link'>
          Somatic Sensibilities
        </Link>
        . To recognize my overdeveloped parts (common patterns of sensations,
        postures, feelings, thinking patterns, and ways of being built into my nervous system), accept their presence, respond from a space of engaged equanimity, and spend more time living in the now. 
      </>,
      <>
        My <em>Somatic Sensibilities</em> create more space for Wholehearted
        Presence. I am able to choose compassion over disconnection and
        disembodiment. To practice true humility. To befriend my spaces of
        contraction and appreciate how they have protected me, and to honor
        others in the same way.
      </>,
      <>
        The practice of <em>Dynamic Discernment</em> has shifted how I engage in the world. I recognize the multiple interconnected and interrelated systems that have shaped and continue to shape my ways of being. I understand that I am a small part of a much larger universe. That my words and actions have reverberations that I will never fully recognize. That life is complex and messy, and the human tendency to engage life from a rational, linear, and dualistic framework ignores this beautiful complexity. When I engage from a mindful space, experience life with an open heart, and listen to the intuition I receive from my gut, I honor the beautiful complexity of life.
      </>,
      <>
        Finally, I embrace <em>Leaderful Living</em>, by building and sustaining transformational relationships grounded in interdependence and mutual learning. I allow opportunities to emerge, instead of forcing round pegs into square holes. I surrender my ego and embrace the journey.
      </>,
      <>
        For me, Embodied Enoughness is a practiced-based way of living that
        continually creates more space, possibility, growth, and choice. 
      </>,
    ],
  },
}
