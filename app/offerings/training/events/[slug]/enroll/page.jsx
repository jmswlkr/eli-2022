import { draftMode } from 'next/headers'

import { useContentfulEntryByParams } from '@/contentful'
import { EventDetails } from './details'
import { EnrollmentForm } from './form'
import { Payment } from './payment'
import { CtaSection, TestComponent } from '@/ui-components'
import { EnrollProvider } from './enroll.context'

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
    <div className='ENROLL_PAGE mt-[20vh] lg:w-full flex-col-tl gap-lg min-h-screen'>
      <section className='flex-col-tl text-primary-600 gap-md'>
        <p className='HEADER meta-1'>Event Enrollment</p>
        <h1 className='HEADER head-3'>
          {content?.hero?.fields?.heroPrimaryText}
        </h1>
      </section>
      {/* <TestComponent content={content} /> */}
      <EnrollProvider>
        <EventDetails event={content} />
        {/* <EnrollmentForm /> */}
        <Payment
          amount={content.eventCourseTuition}
          eventId={content.pageSlug}
          confirmationSlug={`/offerings/training/events/${params.slug}/enroll/confirmation`}
          content={content}
        />
      </EnrollProvider>
      <CtaSection />
    </div>
  )
}

export default EnrollPage
