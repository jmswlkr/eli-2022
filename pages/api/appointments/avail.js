// Availability Route
import { Client, Environment } from 'square'

const clientConfig = {
  accessToken: process.env.SB_SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox,
}

const { bookingsApi } = new Client(clientConfig)

export default async function handler(req, res) {
  const { start, end } = req.body
  try {
    const response = await bookingsApi.listBookings(
      undefined,
      undefined,
      undefined,
      'L2551394AQ8WH',
      start,
      end
    )
    res.send(response.body)
  } catch (error) {
    res.send(error)
  }
}
