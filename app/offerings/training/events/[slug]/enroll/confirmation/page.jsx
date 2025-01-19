import { ContentLayout, LinkButton } from '@/ui-components'
import React from 'react'

const EnrollConfirmationPage = () => {
  return (
    <ContentLayout>
      <div className='flex-col-center gap-ms mt-xxl mb-lg'>
        <h1 className='head-2 text-primary-500 mt-xxl w-full text-center'>
          Thank you!
        </h1>
        <p>
          Your enrollment has been confirmed.{' '}
          <span className='ml-[.5ch] italic'>Welcome to the course!</span>
        </p>
        <p>
          You will receive an email at your provided address with
          next steps.
        </p>
        <LinkButton
          text='Back to Home'
          path='/'
          classes='md outline'
        />
      </div>
    </ContentLayout>
  )
}

export default EnrollConfirmationPage