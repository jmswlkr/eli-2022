// External lib
import React, {
  createContext,
  useEffect,
  useState,
} from 'react'
import { Client, Environment } from 'square'
import axios from 'axios';

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
    axios
      .get('/api')
      .then((res) => {
        // console.log('res.data: ', res.data);
      })
      .catch((err) => {
        // console.log('err: ', err);
      })
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
