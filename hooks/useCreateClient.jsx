'use client';

import { useMutation } from 'react-query'

export const useCreateClient = () => {
  const createClient = async (clientData) => {
    const response = await fetch('/api/create-client', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(
        data.error || 'An error occurred while creating the client.'
      )
    }
    return data
  }

  return useMutation(createClient)
}

