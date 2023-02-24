import { CalendarIcon, ClockIcon } from 'ui-components/svg/scheduling-icons'

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
}

/*
aptDetail:  
{date: {…}, time: {…}}
date
: 
icon
: 
id
: 
"DATE"
val
: 
{m: 'Oct', d: '21', y: 2022}
[[Prototype]]
: 
Object
time
: 
icon
: 
id
: 
"TIME"
val
: 
{t: '1:00', m: 'pm', tz: 'ET'}
+ Target Format
Tue Nov 01 2022 00:00:00 GMT+0700 (Indochina Time)
*/

export const SESSION_DETAIL = {
  types: [
    { id: '', version: '', name: 'Consult', duration: '50MIN' },
    { id: '', version: '', name: 'Coaching', duration: '90MIN' },
    { id: '', version: '', name: 'Follow-up', duration: '30MIN' },
    { id: '', version: '', name: 'Group', duration: '4HRS' },
  ],
  current: { id: '', version: '',  name: 'Consult', duration: '50MIN' },
}
