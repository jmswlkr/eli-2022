import { send } from '@emailjs/browser'

import { SectionHeader } from 'ui-components/headings'
import { baseUrl } from '@/utils'

export const ContactSection = () => {
  async function handleSubmitInquiry(formData) {
    'use server'
    console.log('formData: ', formData)

    send(
      `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
      `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
      {
        from_name: formData.name,
        to_name: 'ELI | The Embodied Learning Institute',
        message: formData.message,
        reply_to: formData.email
      },
      `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })
  }

  return (
    <section className='CONTACT_SECTION borer-black flex-center h-[90vh] lg:h-[80vh] isolate relative w-full border'>
      <div className='FULLBLEED_WRAP bg-primary-100 absolute-center flex-center h-full !w-screen'>
        <div className='CONTENT p-md md:p-lg lg:px-xxl lg:grid-cols-2 gap-xxl z-10 grid w-full'>
          <div className='FORM_WRAPPER flex-col-tl full'>
            <SectionHeader title='Get in Touch' />
            <form
              action={handleSubmitInquiry}
              className='flex-col-tl gap-md w-full'
            >
              <input
                className='text-primary-500 placeholder:text-primary-500 placeholder:tracking-[2px] border-primary-500 p-ms w-full bg-transparent border-b'
                name='name'
                type='text'
                placeholder='Name'
              />
              <input
                className='mb-md text-primary-500 placeholder:text-primary-500 placeholder:tracking-[2px] border-primary-500 p-ms w-full bg-transparent border-b'
                name='email'
                type='email'
                placeholder='Email'
              />
              <textarea
                className='text-primary-500 placeholder:text-primary-500 placeholder:tracking-[2px] border-primary-500 p-ms w-full border rounded-lg  min-h-[25vh] bg-transparent'
                name='message'
                placeholder='Enter your message...'
              />
              <button
                type='submit'
                className='general-btn px-md py-sm outline border-primary-500 text-primary-500'
              >
                Submit
              </button>
            </form>
          </div>
          <div className='IMAGE_WRAP lg:block full relative hidden overflow-hidden rounded-lg'>
            <div className='full isolate relative'>
              <div className='SHADE absolute-shade bg-primary-500/20 z-10' />
              <img
                src={baseUrl('sunset_tzfxkn')}
                alt=''
                className='absolute-img z-0'
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className='MOBILE_BG_CARD absolute-center bg-primary-150 lg:hidden z-0 w-screen h-full' /> */}
    </section>
  )
}
