import { createContext, useContext, useState } from 'react'

import { useToggleScroll } from '@hooks/useToggleScrolll'

const defaultOptions = {
  modalContent: null,
  setModalContent: () => {},
  contentModalOpen: false,
  setContentModalOpen: () => {}
}

const LayoutContext = createContext(defaultOptions)

export const useLayoutContext = () => useContext(LayoutContext)

export const LayoutProvider = ({ children }) => {
  const [contentModalOpen, setContentModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  useToggleScroll(contentModalOpen)

  return (
    <LayoutContext.Provider
      value={{
        modalContent,
        setModalContent,
        contentModalOpen,
        setContentModalOpen
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
