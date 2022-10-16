// SQUARE API HELPERS
const addHours = (startTime, hoursToAdd) => {
  const time = new Date(startTime)
  time.setTime(time.getTime() + hoursToAdd * 60 * 60 * 1000)

  return time.toISOString().slice(11, 19)
}

const bookDurationWindow = (start, duration, id) => {
  const numSlots = Math.ceil(duration / 60)
  const bookedSlots = Array.from({ length: numSlots }).map((_, idx) => {
    return { time: addHours(start, idx + 1), id }
  })
  return bookedSlots
}

export const getBookingsByDate = (bookings) => {
  const bookingsByDate = {}

  bookings.forEach((bkg) => {
    const bookDate = bkg.start_at.slice(0, 10)
    const bookDuration = bkg.appointment_segments[0].duration_minutes
    const bookedSlots = bookDurationWindow(bkg.start_at, bookDuration, bkg.id)

    if (!bookingsByDate[bookDate]) {
      bookingsByDate[bookDate] = [...bookedSlots]
    } else {
      bookingsByDate[bookDate] = [...bookingsByDate[bookDate], ...bookedSlots]
    }
  })

  return bookingsByDate
}

export const extractServicesData = ({ objects }) => {
  return objects.map((ss) => {
    const minDur = Math.floor(
      ss.item_data.variations[0].item_variation_data.service_duration / 60000
    )
    const shortName = ss.item_data.name.split(' ')[1]
    const serviceId = ss.item_data.variations[0].id
    const serviceVersion = ss.item_data.variations[0].version
    return {
      id: serviceId,
      name: shortName,
      duration: minDur,
      version: serviceVersion,
    }
  })
}

export const formatApptForSquare = (apptState) => {
  const { m, d, y } = apptState.date.val
  let { t, m: mer } = apptState.time.val
  // set to 24hr
  t = (mer === 'pm' && t != '12:00') ? t + 12 : t
  return new Date(
    `${m} ${d} ${y} ${t.toString().padStart(4, '0')}:00`
  ).toISOString()
}
