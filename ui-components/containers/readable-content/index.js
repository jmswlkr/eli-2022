import { twm } from 'utils/tailwind'

export const ReadbleContent = ({ classes, children }) => {
  return (
    <div
      className={twm(
        'READABLE_CONTENT w-[var(--reading-content-width)] flex-col-tl gap-lg lg:gap-xl',
        classes
      )}
    >
      {children}
    </div>
  )
}
