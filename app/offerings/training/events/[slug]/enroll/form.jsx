'use client'

import { useEffect } from 'react'

import { useEnrollContext } from './enroll.context'
import { twm } from 'utils/tailwind'
import { useState } from 'react'

export const EnrollmentForm = () => {
  const [emailError, setEmailError] = useState('')

  const {
    email,
    fullName,
    address,
    phone,
    reqsNotFilled,
    submitAttempted,
    setEmail,
    setFullName,
    setAddress,
    setPhone,
    setReqsNotFilled
  } = useEnrollContext()

  function handleResetFields() {
    setEmail('')
    setFullName('')
    setAddress('')
    setPhone('')
  }

  function catchRequiredFields() {
    const reqs = []
    if (!email) reqs.push('email')
    if (!fullName) reqs.push('fullName')
    setReqsNotFilled(reqs)
  }

  useEffect(() => {
    catchRequiredFields()
  }, [email, fullName])

  const reqsNotFilledStyle = `bg-accent-300/50 pt-sm transition-all rounded-md`

  return (
    <section className='ENROLLMENT_FORM flex-col-tl gap-md w-full'>
      <h2 className='head-5'>Enrollment Form</h2>
      <form className='flex-col-tl gap-lg bg-primary-100 p-md py-lg w-full rounded-md'>
        <input
          placeholder='First and last name'
          className={twm(
            'w-full placeholder:text-primary-500 placeholder:uppercase tracking-[var(--push-sm)] pl-sm pb-sm meta-1 !border-b border-primary-500 bg-transparent border-0',
            reqsNotFilled.includes('fullName') &&
              submitAttempted &&
              reqsNotFilledStyle
          )}
          type='text'
          required
          value={fullName}
          onChange={(e) => {
            setReqsNotFilled(
              reqsNotFilled.filter((req) => req !== 'fullName')
            )
            setFullName(e.target.value)
          }}
        />
        <div className='full lg:flex-row relative flex flex-col'>
          <input
            placeholder='Email'
            className={twm(
              'w-full placeholder:text-primary-500 placeholder:uppercase tracking-[var(--push-sm)] pl-sm pb-sm meta-1 !border-b border-primary-500 bg-transparent border-0',
              submitAttempted && 'invalid:bg-accent-300/50 pt-sm transition-all rounded-md',
              reqsNotFilled.includes('email') &&
                submitAttempted &&
                reqsNotFilledStyle
            )}
            type='email'
            required
            value={email}
            onChange={(e) => {
              setReqsNotFilled(
                reqsNotFilled.filter((req) => req !== 'email')
              )
              setEmail(e.target.value)
              setEmailError('')
            }}
            onBlur={(e) => {
              if (!e.target.validity.valid) {
                setEmailError(e.target.validationMessage)
              } else {
                setEmailError('')
              }
            }}
          />
          {emailError && (
            <p className="lg:absolute-center-right text-primary-600 bold italic origin-right scale-[85%]">{emailError}</p>
          )}
        </div>
        <input
          placeholder='Address (optional)'
          className='w-full placeholder:text-primary-500 placeholder:uppercase tracking-[var(--push-sm)] pl-sm pb-sm meta-1 !border-b border-primary-500 bg-transparent border-0'
          type='text'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          placeholder={`Phone Number (optional)`}
          className='w-full placeholder:text-primary-500 placeholder:uppercase tracking-[var(--push-sm)] pl-sm pb-sm meta-1 !border-b border-primary-500 bg-transparent border-0'
          type='tel'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p
          onClick={handleResetFields}
          className='text-primary-900 meta-1 underline-offset-1 decoration-dotted italic underline cursor-pointer'
        >
          ↻ Reset Fields
        </p>
      </form>
    </section>
  )
}
