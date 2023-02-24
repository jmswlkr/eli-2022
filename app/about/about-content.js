import Link from 'next/link'

export const QUOTE_CONTENT = {
  quote:
    '“Sane leadership is the unshakeable faith in people’s capacity to be generous, creative and kind. It is the commitment to create the conditions for these capacities to blossom, protected from the external environment.  It is the deep knowing that, even in the most dire circumstances, more becomes possible as people engage together with compassion and discernment, self-determining their way forward.',
  author: 'Margaret Wheatly',
  source: ' Who do we choose to be?',
}

export const INTRO_CONTENT = {
  intro:
    'The Embodied Learning Institute is a space of connection, healing, growth, and leadership-development for individuals, communities, organizations, and people-powered movements committed to progressive social change.',
  p1: {
    text: 'Clients thrive, as they hone the four pillars of Embodied Enoughness:',
    color_text:
      'somatic sensibility, wholehearted presence, dynamic discernment, and leaderful living.',
  },
  p2: {
    text: 'These pillars engage four ordinary and ubiquitous cultural tendencies:',
    color_text:
      'disconnection from sensations/feeling, lack of compassion for self/others, ego-driven dualistic thinking, and relentless individualism.',
  },
  p3: {
    text: (
      <>
        These learned inclinations hinder our ability to thrive. At ELI, we
        teach clients to hone themselves through the practices outlined in our{' '}
        <Link legacyBehavior href='/#pillars'>four pillars</Link>, undoing these unhealthy
        tendencies that are at the root of so much strife in our lives and in
        our culture.
      </>
    ),
  },
}
