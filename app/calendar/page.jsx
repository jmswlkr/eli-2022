'use client'

import axios from 'axios'
import { PopupModal, useCalendlyEventListener } from 'react-calendly'

import { calendly_config } from './config'
import { ContentLayout } from 'ui-components/content-layout/content-layout'
import { useCalendlyModalDisplay } from './useCalendlyModalDisplay'

import { layout, modal, backBtn } from './calendar.module.scss'


// TODO: Disable body scroll on this page.
// TODO: Add a popup with redirect button on successful booking.

const CalendarPage = () => {
  const { modalRoot, rootMounted } = useCalendlyModalDisplay()

  const handleGetCalendlyAfterSchedle = async (uri) => {
    console.log('uri: ', uri);
    const response = await axios.get(uri)
    console.log('response: ', response);
  }

  useCalendlyEventListener({
    onEventScheduled: (e) => {
      console.log('e: ', e);
      handleGetCalendlyAfterSchedle(e.data.payload.invitee.uri)
    }
  })

  return (
    <ContentLayout classes={layout}>
      <div className={backBtn}>← Back to Home</div>
      <div className={modal} id='modal-location' />
      {rootMounted && (
        <PopupModal {...calendly_config} rootElement={modalRoot} />
      )}
    </ContentLayout>
  )
}

export default CalendarPage
