'use client';

import { ActionButton } from "@/ui-components";

export const EnrollmentForm = () => {
  function handleSubmitForm() {
    console.log('submitting form!')
  }

  return (
    <section className='ENROLLMENT_FORM flex-col-tl gap-md w-full'>
      <h2 className='head-5'>Enrollment Form</h2>
      {/*
        
          - Event details:
            - Date
            - Price
            - Location/Online
          - Signup form:
            - First and last name
            - Address
            - Phone number
            - Email

        */}
      <form className='flex-col-tl gap-lg bg-primary-100 p-md py-lg w-full rounded-md' onSubmit={handleSubmitForm}>
        <input
          placeholder='First and last name'
          className='w-full placeholder:text-primary-500 uppercase tracking-[var(--push-sm)] placeholder: pl-sm pb-sm meta-1 !border-b border-primary-500 bg-transparent border-0'
          type='text'
        />
        <input
          placeholder='Address'
          className='w-full placeholder:text-primary-500 uppercase tracking-[var(--push-sm)] placeholder: pl-sm pb-sm meta-1 !border-b border-primary-500 bg-transparent border-0'
          type='text'
        />
        <input
          placeholder='Email'
          className='w-full placeholder:text-primary-500 uppercase tracking-[var(--push-sm)] placeholder: pl-sm pb-sm meta-1 !border-b border-primary-500 bg-transparent border-0'
          type='text'
        />
        <input
          placeholder='Phone'
          className='w-full placeholder:text-primary-500 uppercase tracking-[var(--push-sm)] placeholder: pl-sm pb-sm meta-1 !border-b border-primary-500 bg-transparent border-0'
          type='text'
        />
        {/* <ActionButton text='Submit' classes="outline md text-primary-500" action={handleSubmitForm} /> */}
      </form>
    </section>
  )
}
