// Auth Route

const env = process.env.NODE_ENV
const isDev = env === "development"

export default function handler(req, res) {
  const clientId = isDev
    ? process.env.SB_SQUARE_APP_ID
    : process.env.SQUARE_APP_ID

  const authURL = ` https://connect.squareup${
    isDev ? 'sandbox' : ''
  }.com/oauth2/authorize?client_id=${clientId}&scope=APPOINTMENTS_WRITE+APPOINTMENTS_READ&redirect_uri=http://localhost:3456/callback`

  res.status(200).json({ url: authURL })
}