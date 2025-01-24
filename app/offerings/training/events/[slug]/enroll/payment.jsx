'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { PayPalButton } from '@/ui-components'
import { useEnrollContext } from './enroll.context'
import { twm } from 'utils/tailwind'

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID

export const Payment = ({
  amount,
  confirmationSlug,
  eventId,
  content
}) => {
  const enrollData = useEnrollContext()
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
  } = enrollData

  // Create a local state mirror of the enrollment data
  const [localEnrollData, setLocalEnrollData] = useState(null)

  // Update local state whenever enrollment data changes
  useEffect(() => {
    if (enrollData.email && enrollData.fullName) {
      setLocalEnrollData({
        email: enrollData.email,
        fullName: enrollData.fullName,
        address: enrollData.address,
        phone: enrollData.phone
      })
    }
  }, [enrollData])

  const emailContent = {
    subject: content.confirmationEmailSubjectLine,
    intro: {
      heading: `${content.confirmationEmailIntroHeading} ${content.confirmationEmailShouldGreetByName ? `, ${enrollData.fullName}!` : ''}`,
      body: content.confirmationEmailIntroParagraph
    },
    main: {
      heading: content.confirmationEmailMainHeading,
      body: content.confirmationEmailMainParagraph,
      listItems: content.confirmationEmailMainListItems
    },
    zoom: {
      heading: content.confirmationEmailZoomSectionHeading,
      body: content.confirmationEmailZoomSectionInstructions,
      id_link_pwd:
        content.confirmationEmailZoomSectionLinkpassword
    }
  }

  const handleSendConfirmationEmail = useCallback(
    async (emailData) => {
      try {
        // const { email, fullName, address, phone } = emailData
        const to = emailRef.current.value
        const name = nameRef.current.value
        const address = addressRef.current.value
        const phone = phoneRef.current.value

        const response = await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            to,
            name,
            address,
            phone,
            emailContent
          })
        })

        const data = await response.json()
        return data
      } catch (error) {
        console.error('Error sending confirmation email:', error)
        throw error
      }
    },
    [emailContent]
  )

  const payPalSuccessHandler = useCallback(
    async (details) => {
      try {
        // Use the local state which should persist through PayPal modal
        const enrollmentData = localEnrollData

        // 1. Send enrollment data to backend
        const enrollResponse = await fetch('/api/enroll', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            paymentDetails: details,
            eventId,
            ...enrollmentData
          })
        })

        // 2. Send confirmation email
        const emailResponse =
          await handleSendConfirmationEmail(enrollmentData)

        // 3. Redirect to success page
        const redirectURL = `${confirmationSlug}?id=${details.id}`
        window.location.href = redirectURL
      } catch (error) {
        console.error('Enrollment process failed:', error)
      }
    },
    [
      localEnrollData,
      eventId,
      confirmationSlug,
      handleSendConfirmationEmail
    ]
  )

  const [emailError, setEmailError] = useState('')

  const emailRef = useRef(null)
  const nameRef = useRef(null)
  const addressRef = useRef(null)
  const phoneRef = useRef(null)

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
    <PayPalScriptProvider
      options={{ 'client-id': clientId, currency: 'USD' }}
    >
      <section className='ENROLLMENT_FORM flex-col-tl gap-md w-full'>
        <h2 className='head-5'>Enrollment Form</h2>
        <form className='flex-col-tl gap-lg bg-primary-100 p-md py-lg w-full rounded-md'>
          <input
            ref={nameRef}
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
              ref={emailRef}
              placeholder='Email'
              className={twm(
                'w-full placeholder:text-primary-500 placeholder:uppercase tracking-[var(--push-sm)] pl-sm pb-sm meta-1 !border-b border-primary-500 bg-transparent border-0',
                submitAttempted &&
                  'invalid:bg-accent-300/50 pt-sm transition-all rounded-md',
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
              <p className='lg:absolute-center-right text-primary-600 bold italic origin-right scale-[85%]'>
                {emailError}
              </p>
            )}
          </div>
          <input
            ref={addressRef}
            placeholder='Address (optional)'
            className='w-full placeholder:text-primary-500 placeholder:uppercase tracking-[var(--push-sm)] pl-sm pb-sm meta-1 !border-b border-primary-500 bg-transparent border-0'
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            ref={phoneRef}
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
      <div className='gap-ms mb-xxl flex-col-tl w-full'>
        <h2 className='PAYMENT_HEADER head-5'>Payment</h2>
        <div className='justify-content-start align-items-start lg:flex-row gap-ms bg-primary-600 overflow-clip p-md z-10 flex flex-col justify-start w-full text-white rounded-md'>
          <div className='flex-col-tl gap-ms w-full h-full'>
            <h4 className='head-5'>Your Total:</h4>
            <p className='text-primary-100 head-4'>${amount}</p>
            <button
              onClick={handleSendConfirmationEmail}
              className='general-btn outline p-md'
            >
              Test Email
            </button>
          </div>
          <div className='flex-center isolate relative w-full'>
            {reqsNotFilled.length > 0 && (
              <div
                onClick={() => setSubmitAttempted(true)}
                className='absolute-center full z-50 bg-transparent cursor-pointer'
              />
            )}
            <PayPalButton
              amount={amount}
              onSuccess={payPalSuccessHandler}
            />
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  )
}
