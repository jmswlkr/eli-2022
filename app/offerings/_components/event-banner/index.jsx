export const EventBanner = ({ bannerText }) => {
  return (
    <div className='flex-center md:px-md py-lg lg:p-lg border-y border-primary-500 text-primary-500'>
      <p className='!leading-[150%] text-primary-500 head-4 font-semibold'>{bannerText}</p>
    </div>
  )
}
