// Obtain Token Route

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
  const authCode = req.body.code

  try {
    const response = await client.oAuthApi.obtainToken({
      clientId: process.env.SB_SQUARE_APP_ID,
      clientSecret: process.env.SB_SQUARE_APP_SECRET,
      code: authCode,
      grantType: 'authorization_code',
      redirectUri: 'http://localhost:3456/callback',
    })
  } catch (error) {
    res.send(error)
  }
}
