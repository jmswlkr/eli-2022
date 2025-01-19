'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

const defaultOptions = {
  email: '',
  fullName: '',
  address: '',
  phone: '',
  eventMeta: {
    title: '',
    date: {
      start: '',
      end: ''
    },
    price: '',
    location: '',
    tuition: ''
  }
}

const EnrollContext = createContext(defaultOptions)

export const useEnrollContext = () => useContext(EnrollContext)

export const EnrollProvider = ({ children }) => {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [eventMeta, setEventMeta] = useState({})
  const [reqsNotFilled, setReqsNotFilled] = useState([])
  const [submitAttempted, setSubmitAttempted] = useState(false)

  return (
    <EnrollContext.Provider
      value={{
        email,
        setEmail,
        fullName,
        setFullName,
        address,
        setAddress,
        phone,
        setPhone,
        eventMeta,
        setEventMeta,
        reqsNotFilled,
        setReqsNotFilled,
        submitAttempted,
        setSubmitAttempted
      }}
    >
      {children}
    </EnrollContext.Provider>
  )
}
