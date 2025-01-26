import { getManagementClient } from '@/contentful'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()

    const { environment } = await getManagementClient()

    const event = await environment.getEntry(body.eventId)

    const currentContent = event.fields.registeredUsers?.[
      'en-US'
    ] || {
      metadata: {
        lastUpdated: new Date().toISOString(),
        totalRegistrations: 0,
        availableSpots: 15,
        maximumCapacity: 15
      },
      registrations: []
    }

    const newRegistration = {
      id: `reg_${Date.now()}`,
      status: 'confirmed',
      registrationDetails: {
        fullName: body.fields.registrationDetails.fullName,
        email: body.fields.registrationDetails.email,
        phone: body.fields.registrationDetails.phone || '',
        address: body.fields.registrationDetails.address || ''
      },
      timestamps: {
        registeredAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      payment: body.fields.payment
        ? {
            id: body.fields.payment.id,
            status: body.fields.payment.status,
            amount: body.fields.payment.amount,
            currency: body.fields.payment.currency,
            provider: 'paypal'
          }
        : null,
      communication: {
        confirmationEmailSent:
          body.fields.communication.confirmationEmailSent,
        confirmationEmailDate:
          body.fields.communication.confirmationEmailDate,
        confirmationEmailId: body.fields.communication.confirmationEmailId,
        reminderEmailsSent: []
      }
    }

    const existingIndex = currentContent.registrations.findIndex(
      (reg) =>
        reg.registrationDetails.email ===
        newRegistration.registrationDetails.email
    )

    if (existingIndex >= 0) {
      // Update existing registration
      currentContent.registrations[existingIndex] = {
        ...currentContent.registrations[existingIndex],
        ...newRegistration,
        timestamps: {
          ...currentContent.registrations[existingIndex]
            .timestamps,
          updatedAt: new Date().toISOString()
        }
      }
    } else {
      // Add new registration
      currentContent.registrations.push(newRegistration)
    }

    // Update metadata
    currentContent.metadata = {
      ...currentContent.metadata,
      lastUpdated: new Date().toISOString(),
      totalRegistrations: currentContent.registrations.length,
      availableSpots:
        currentContent.metadata.maximumCapacity -
        currentContent.registrations.length
    }

    // Update the event registeredUsers field
    event.fields.registeredUsers = {
      'en-US': currentContent
    }

    const updatedEvent = await event.update()
    const publishedEvent = await updatedEvent.publish()

    return NextResponse.json(
      {
        message: 'Registration processed successfully',
        registrationId: newRegistration.id,
        status: existingIndex >= 0 ? 'updated' : 'created'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing registration:', error)

    return NextResponse.json(
      {
        message: 'Failed to process registration',
        error: error.message,
        details:
          error.response?.data ||
          'No additional error details available'
      },
      { status: 500 }
    )
  }
}
