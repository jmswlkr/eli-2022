'use client'; 

import { Button } from '@/ui-components'
import { useEffect } from 'react'

const Error = ({ error, reset }) => {

  useEffect(() => {
    /* eslint no-console: 0 */
    console.log('The user encountered the following error: ', error)
  }, [error, reset])

  return (
    <section className='CONTAINER mt-[var(--nav-height)] flex-col-center p-xxl w-full min-h-[50vh]'>
      <div className='HEADER text-primary-500 head-2 flex-col-center'>
        <h2>We can't find this page.</h2>
        <div className='RELOAD_BTN'>
          <Button text='Reload' action={reset} />
        </div>
      </div>
      <p className='MESSAGE par-1 w-2/3 flex-col-center text-center [&>*]:text-center'>
        <span>
          Please reload your browser or click the above button to go back to the
          previous page.
        </span>
      </p>
    </section>
  )
}

export default Error;