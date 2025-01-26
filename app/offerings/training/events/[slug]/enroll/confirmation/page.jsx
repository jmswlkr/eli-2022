import { ContentLayout, LinkButton } from '@/ui-components'
import React from 'react'

const EnrollConfirmationPage = () => {
  return (
    <div className='flex-col-center gap-ms h-[50vh]'>
      <h1 className='head-2 text-primary-500 w-full text-center'>
        Thank you!
      </h1>
      <p>
        Your enrollment has been confirmed.{' '}
        <span className='ml-[.5ch] italic'>
          Welcome to the course!
        </span>
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
  )
}

export default EnrollConfirmationPage
