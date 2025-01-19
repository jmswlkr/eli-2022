import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { paymentDetails, eventId } = body
    console.log("🚀 ~ POST ~ paymentDetails:", paymentDetails)

    // 1. Verify payment with PayPal
    const verified = await verifyPayPalPayment(paymentDetails.id)
    if (!verified) {
      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      )
    }

    // 2. Store enrollment in your database
    // Add your database logic here

    // 3. Send confirmation email
    // Add your email sending logic here

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Enrollment error:', error)
    return NextResponse.json(
      { error: 'Failed to process enrollment' },
      { status: 500 }
    )
  }
}

// Helper function to verify PayPal payment
async function verifyPayPalPayment(orderId) {
  try {
    const accessToken = await getPayPalAccessToken()
    const response = await fetch(
      `${process.env.PAYPAL_API_URL}/v2/checkout/orders/${orderId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )

    const data = await response.json()
    return data.status === 'COMPLETED'
  } catch (error) {
    console.error('PayPal verification error:', error)
    return false
  }
}

// Helper function to get PayPal access token
async function getPayPalAccessToken() {
  console.log('getting access token...');
  

  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  
  const response = await fetch(`${process.env.PAYPAL_API_URL}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Accept-Language': 'en_US',
      'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials'
  });

  const data = await response.json();
  console.log("🚀 ~ getPayPalAccessToken ~ data:", data)
  console.log("🚀 ~ getPayPalAccessToken ~ data.access_token:", data.access_token)
  return data.access_token;
}
