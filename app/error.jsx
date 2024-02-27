'use client'; 

import { Button } from '@/ui-components'
import { useEffect } from 'react'

const Error = ({ error, reset }) => {

  useEffect(() => {
    /* eslint no-console: 0 */
    console.log('The user encountered the following error: ', error)
  }, [error, reset])

  return (
    <section className='CONTAINER flex-col-center p-xxl w-ful'>
      <div className='HEADER text-primary-500 head-2 flex-col-center'>
        <h2>Error!</h2>
        <div className='RELOAD_BTN'>
          <Button text='subscribe for updates' action={reset} />
        </div>
      </div>
      <p className='MESSAGE flex-col-center text-center [&>*]:text-center'>
        <span>We encountered an error looking for this page.</span>
        <span>•</span>
        <span>
          Please reload your browser or click the above button to go back to the
          previous page.
        </span>
      </p>
    </section>
  )
}

export default Error;