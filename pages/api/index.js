import { Client, Environment } from 'square'

const client = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_API_KEY,
})

const listBookings = async () => {
  try {
    const response = await client.bookingsApi.listBookings()

    console.log('the BOOKS', response.result)
  } catch (error) {
    console.log(error)
  }
}



const createBooking = async () => {
  try {
    const response = await client.bookingsApi.createBooking(
      {
        booking: {
          startAt: '2022-11-26T13:00:00Z',
          locationId: process.env.SQUARE_LOCATION_ID,
          customerId: 'EX2QSVGTZN4K1E5QE1CBFNVQ8M',
          appointmentSegments: [
            {
              durationMinutes: 60,
              serviceVariationId:
                'RU3PBTZTK7DXZDQFCJHOK2MC',
              teamMemberId: 'TM39R403BaOkqqCx',
              serviceVariationVersion: 1599775456731,
            },
          ],
        },
      }
    )

    console.log(response.result)
  } catch (error) {
    console.log(error)
  }
}

// createBooking()


// listBookings()


const server = (req, res) => {
  res.status(200).json({ test: 'test cargo' })
}

export default server;
