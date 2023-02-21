import { Client, Environment } from 'square'
import { v4 as uuidv4 } from 'uuid'
import JSONBig from 'json-bigint'

const env = process.env.NODE_ENV
const isDev = env === 'development'
// Set up the Square API client
const client = new Client({
  environment: isDev ? Environment.Sandbox : Environment.Production,
  accessToken: isDev
    ? process.env.SB_SQUARE_ACCESS_TOKEN
    : process.env.SQUARE_ACCESS_TOKEN,
})

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create a new customer object with the required fields
      const requestBody = {
        givenName: req.body.given_name,
        familyName: req.body.family_name,
        emailAddress: req.body.email_address,
        idempotencyKey: uuidv4().toString(),
      }

      // Call the Square API to create a new customer entry
      const response = await createClientIfNotExisting(requestBody)

      // Error if client already found in Square
      if (response.existing_client) {
        throw new Error('Email already subscribed!')
      }

      // Return the new customer object in the API response
      res
        .status(200)
        .json(JSONBig.parse(JSONBig.stringify(response.result.customer)))
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  } else {
    res.status(400).json({ error: 'Invalid request method.' })
  }
}

async function createClientIfNotExisting({
  givenName,
  familyName,
  emailAddress,
}) {
  const {
    result: { customers },
  } = await client.customersApi.searchCustomers({
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
      return { existing_client: true }
    }
  }

  // If no matching customer is found, create a new customer and return its ID
  const {
    result: { customer },
  } = await customersApi.createCustomer({
    emailAddress,
    familyName,
    givenName,
    idempotencyKey: uuidv4(),
  })

  return customer
}
