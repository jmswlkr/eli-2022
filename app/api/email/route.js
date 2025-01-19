import { Resend } from 'resend'

// import EliSingleTopicEmail from '@/emails/eli-single.jsx'
import EliEventConfirmationEmail from '../../../email-templates/eli-event-confirm.jsx'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const body = await req.json()
    console.log('🚀 ~ POST ~ body:', body)
    const { to, emailContent } = body

    const { subject, intro, main, zoom } = emailContent

    // return NextResponse.json({
    //   success: true,
    //   message: 'TEST: Sent email successfully!',
    //   emailContent
    // })
    const resendRes = await resend.emails.send({
      from: 'eli.info@embodiedlearninginstitute.com',
      to: [to],
      subject: subject,
      react: EliEventConfirmationEmail({ ...emailContent })
    })

    console.log('🚀 ~ POST ~ resendRes:', resendRes)
    
    return NextResponse.json({
      success: true,
      message: resendRes.data,
    })

  } catch (error) {
    console.error('🚀 ~ POST ~ error:', error.message)
    return NextResponse.json({
      success: false,
      message: error.message,
    })
  }
}
