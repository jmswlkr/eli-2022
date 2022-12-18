// Appt. Booking Route
import { Client, Environment } from 'square'
import { v4 as uuidv4 } from 'uuid'

const clientConfig = {
  accessToken: process.env.SB_SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox,
}

const { bookingsApi, customersApi } = new Client(clientConfig)

const locationId = process.env.SB_SQUARE_ELI_LOCATION_ID
const teamMemberId = process.env.SB_SQUARE_DEFAULT_TEAM_ID

export default async function handler(req, res) {
  const {
    name,
    email,
    phone,
    appt: { start, segments },
  } = req.body

  const [first, last] = name.split(' ')

  try {
    const response = await bookingsApi.createBooking({
      idempotencyKey: uuidv4(),
      booking: {
        startAt: start,
        locationId,
        customerId: await getCustomerID(first, last, email, phone),
        appointmentSegments: [
          {
            ...segments,
            teamMemberId,
          },
        ],
        locationType: 'BUSINESS_LOCATION',
      },
    })

    res.send({ response })
  } catch (error) {}

  res.send({ msg: 'Error booking appointment!' })
}

async function getCustomerID(givenName, familyName, emailAddress, phoneNumber) {
  const {
    result: { customers },
  } = await customersApi.searchCustomers({
    query: {
      filter: {
        emailAddress: {
          exact: emailAddress,
        },
      },
    },
  })

  if (customers && customers.length > 0) {
    const matchingCustomers = customers.filter(
      (customer) =>
        customer.givenName === givenName && customer.familyName === familyName
    )

    // If a matching customer is found, return the first matching customer
    if (matchingCustomers.length > 0) {
      return matchingCustomers[0].id
    }
  }

  // If no matching customer is found, create a new customer and return its ID
  const {
    result: { customer },
  } = await customersApi.createCustomer({
    emailAddress,
    familyName,
    givenName,
    phoneNumber,
    idempotencyKey: uuidv4(),
  })

  return customer.id
}
