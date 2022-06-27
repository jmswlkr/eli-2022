import React, { useState, useEffect } from 'react'
import moment from 'moment';


// Styling
import { calendar } from './calendar.module.scss';

export const Calendar = () => {
  const value = moment()

  const startDay = value.clone().startOf("month").startOf("week").format("MM/DD ")
  console.log('startDay: ', startDay);
  const endDay = value.clone().endOf("month").endOf("week").format("MM/DD ")
  console.log('endDay: ', endDay);

  return (
    <div className={calendar}></div>
  )
}
