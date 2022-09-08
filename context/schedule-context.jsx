// External lib
import React, {
  createContext,
  useEffect,
  useState,
} from 'react'
import { Client, Environment } from 'square'
import axios from 'axios'

const defaultValues = {
  getAvailability: () => {},
  availability: {},
}

export const ScheduleContext = createContext(defaultValues)

const client = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_API_KEY,
})

export const ScheduleProvider = ({ children }) => {
  const date = new Date()

  const formattedDate = date.toISOString()

  const [availability] = useState({ test: 1 })

  useEffect(() => {
    // axios
    //   .post('/api/appointments/avail', {
    //     start: '2022-07-03T01:00:51.607Z',
    //     end: '2022-08-03T01:00:51.607Z',
    //   })
    //   .then((res) => {
    //     console.log('res.data: ', res)
    //   })
    //   .catch((err) => {
    //     console.log('err from schedule context: ', err)
    //   })
    // axios({
    //   method: 'post',
    //   url: '/api/appointments/avail',
    //   data: {
    //     start: '2022-07-03T01:00:51.607Z',
    //   },
    // })
    //   .then(function (response) {
    //     console.log('response from context', response)
    //   })
    //   .catch(function (error) {
    //     console.log('error from context', error)
    //   })
  }, [])

  const getAvailability = async () => {}

  return (
    <ScheduleContext.Provider
      value={{
        availability,
        getAvailability,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  )
}
