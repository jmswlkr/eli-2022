import { smooth, phases } from './transition'

const su = {
  visible: {
    y: 0,
  },
  hidden: {
    y: '40vh',
  },
}

export const slideUp = {
  variants: su,
  ...phases,
  transition: smooth(1),
}

const sit = {
  visible: {
    y: 0,
  },
  hidden: {
    y: '-110vh',
  },
}

export const slideInTop = {
  variants: sit,
  transition: smooth(0.5),
}
