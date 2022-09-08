// Availability Route

import { Client, Environment } from 'square'

const env = process.env.NODE_ENV
const isDev = env === 'development'

const client = new Client({
  environment: isDev
  ? Environment.Sandbox
  : Environment.Production,
  accessToken: isDev
  ? process.env.SB_SQUARE_ACCESS_TOKEN
  : process.env.SQUARE_ACCESS_TOKEN,
})

export default async function handler(req, res) {
  const { start, end } = req.body
  try {
    const response = await client.bookingsApi.listBookings(
      30,
      undefined,
      undefined,
      'LCK2XKSWZ4R66',
      start,
      // '2022-07-03T01:00:51.607Z',
      ''
    )
    console.log(response.result)

    res.send(response.result)
    resolve()
  } catch (error) {
    console.log(error)
  }
}
