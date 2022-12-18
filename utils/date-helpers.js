// DATE HELPERS
export const toEST = (date = Date.now()) => {
  return date.toLocaleString('en-US', {
    timeZone: 'America/New_York',
  })
}

export const getDateWindow = (windowStart, windowSize = 31) => {
  const windowEnd = new Date(windowStart)
  
  windowEnd.setDate(windowStart.getDate() + windowSize)
  return windowEnd.toISOString()
}

export const getYmd = (date) => {
  return new Date(date).toISOString().slice(0, 10)
}

export const getDateFromState = (aptDateVal) => {

  const { y, m, d } = aptDateVal
  
  const dateFromState = getYmd(
    new Date(`${y}-${m}-${Number(d) + 1}`).toISOString()
  )
  // const dateFromState = getYmd(new Date(`${y}-${m}-19`).toISOString())
  return dateFromState
}

export const timeAlreadyBooked = (bookings = [], hour) => {
  const formattedHour = `${hour.toString().padStart(2, '0')}:00:00`
  const foundMatchingTime = bookings.some((bkg) => {
    return bkg?.time === formattedHour
  })
  return foundMatchingTime
}
