'use client'

import { useState } from 'react'
import {
  PayPalButtons,
  usePayPalScriptReducer
} from '@paypal/react-paypal-js'

export const PayPalButton = ({
  amount,
  currency = 'USD',
  onSuccess
}) => {
  const [error, setError] = useState(null)
  const [{ isPending }] = usePayPalScriptReducer()

  return (
    <div className='z-10 w-full max-w-md'>
      {error && (
        <div className='p-4 mb-4 text-red-700 bg-red-100 rounded'>
          {error}
        </div>
      )}
      {isPending ? (
        <div className='flex-col-center gap-sm full'>
          <span className='h-lg bg-primary-100/10 animate-pulse w-full rounded-md' />
          <span className='h-lg bg-primary-100/10 animate-pulse w-full rounded-md' />
          <span className='h-ms bg-primary-100/10 animate-pulse mb-sm w-1/4 rounded-md' />
        </div>
      ) : (
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                    currency_code: currency
                  }
                }
              ]
            })
          }}
          onApprove={async (data, actions) => {
            try {
              const details = await actions.order.capture()
              onSuccess(details)
            } catch (err) {
              setError('Payment failed. Please try again.')
              console.error('Payment error:', err)
            }
          }}
          onError={(err) => {
            setError('Payment failed. Please try again.')
            console.error('PayPal error:', err)
          }}
        />
      )}
    </div>
  )
}
