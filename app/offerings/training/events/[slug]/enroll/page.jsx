import { draftMode } from 'next/headers'

import { useContentfulEntryByParams } from '@/contentful'
import { TestComponent } from '@/ui-components'
import { EventDetails } from './details'
import { EnrollmentForm } from './form'

const EnrollPage = async ({ params }) => {
  const { isEnabled } = draftMode()

  const { entry } = await useContentfulEntryByParams({
    preview: isEnabled,
    params: {
      content_type: 'offeringsTrainingEventPage',
      include: 10,
      'fields.pageSlug[match]': params.slug
    }
  })

  const content = entry?.items[0].fields

  return (
    <div className='ENROLL_PAGE full mt-[20vh] flex-col-tl gap-lg min-h-screen'>
      {/* <TestComponent content={content}/> */}
      <section className='flex-col-tl text-primary-600 gap-md'>
        <p className='HEADER meta-1'>Event Enrollment</p>
        <h1 className='HEADER head-3'>
          {content?.hero?.fields?.heroPrimaryText}
        </h1>
      </section>
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
          TODO: Redirect to Calendly for scheduling?
          - Payment Capture:
            - PayPal

        */}
      <EventDetails event={content} />
      <EnrollmentForm />
    </div>
  )
}

export default EnrollPage
