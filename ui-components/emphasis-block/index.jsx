export function EmphasisBlock({ text }) {
  return (
    <p className='QUOTE_BLOCK w-full border-primary-500 rounded-r-md p-lg head-5 bg-primary-300/10 !leading-[150%] !text-primary-300 font-bold border-l'>
      {text}
    </p>
  )
}
