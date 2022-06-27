/*
  TODO:
  # Construct OAuth URL using env variables.
*/

const authorize = (req, res) => {
  const clientId = process.env.SQUARE_APP_ID

  const authURL = ` https://connect.squareup.com/oauth2/authorize?client_id=${clientId}&scope=APPOINTMENTS_WRITE+APPOINTMENTS_READ&session=False`

  res.status(200).json({ url: authURL })
}

export default authorize
