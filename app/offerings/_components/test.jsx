'use client';

export const TestComponent = ({ content }) => {
  console.log('content from test component: ', content);
  
  return (
    <div className='flex-center bg-primary-500/20 h-[25vh] w-full text-2xl font-semibold'>
      Test Component!
    </div>
  )
}
