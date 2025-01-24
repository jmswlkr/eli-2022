import { Resend } from 'resend'

// import EliSingleTopicEmail from '@/emails/eli-single.jsx'
import EliEventConfirmationEmail from '../../../emails/eli-event-confirm.jsx'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const body = await req.json()
    const { to, emailContent } = body

    const { subject } = emailContent

    const resendRes = await resend.emails.send({
      from: 'eli.info@embodiedlearninginstitute.com',
      to: [to],
      subject: subject,
      react: EliEventConfirmationEmail({ ...emailContent })
    })

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
