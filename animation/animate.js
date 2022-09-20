import { slideUpFadeIn } from './slide'
import { smooth } from './transition'

export const animationProps = ({
  controls = 'visible',
  dur = 1,
  del = 0,
  animation = slideUpFadeIn,
}) => {

  return {
    animate: controls,
    initial: 'hidden',
    exit: 'hidden',
    transition: smooth(dur, del),
    ...animation,
  }
}
