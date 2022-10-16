// Availability Route
import { Client, Environment } from 'square'

const clientConfig = {
  accessToken: process.env.SB_SQUARE_ACCESS_TOKEN,
  environment: 'sandbox',
}

const { catalogApi } = new Client(clientConfig)

export default async function handler(req, res) {
  try {
    const response = await catalogApi.listCatalog()
    res.send(response.body)
  } catch (error) {
    console.log(error)
  }
}
