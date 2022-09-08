import { CalendarIcon, ClockIcon, HourGlassIcon } from '@/svg/scheduling-icons'

const getMonth = () => {
  return new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
    new Date()
  )
}

export const CLIENT_DETAIL = {
  Name: '', 
  Email: '',
  Phone: '',
}

export const APT_DETAIL = {
  date: {
    id: 'DATE',
    val: {
      m: getMonth(),
      d: new Date().getDate(),
      y: new Date().getFullYear(),
    },
    icon: <CalendarIcon />,
  },
  time: {
    id: 'TIME',
    val: {
      t: '1:00',
      m: 'pm',
      tz: 'ET',
    },
    icon: <ClockIcon />,
  },
  // session: {
  //   id: 'SESSION TYPE',
  //   val: {
  //     type: 'Consult   : ',
  //     dur: '45MIN',
  //   },
  //   icon: <HourGlassIcon />,
  // },
}

export const SESSION_DETAIL = {
  types: [
    { id: 'Consult', duration: '50MIN' },
    { id: 'Coaching', duration: '90MIN' },
    { id: 'Follow-up', duration: '30MIN' },
    { id: 'Group', duration: '4HRS' },
  ],
  current: { id: 'Consult', duration: '50MIN' },
}
