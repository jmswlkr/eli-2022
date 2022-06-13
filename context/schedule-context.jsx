import React, { createContext, useState } from 'react'

const defaultValues = {
  scheduleDate: {},
  setScheduleDate: () => {},
}

export const ScheduleContext = createContext(defaultValues)

export const ScheduleProvider = ({ children }) => {
  const [scheduleDate, setScheduleDate] = useState({ date: 'test' })

  return (
    <ScheduleContext.Provider
      value={{
       scheduleDate,
       setScheduleDate,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  )
}
