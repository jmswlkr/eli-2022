import { useEffect } from "react"
import { useState } from "react"

export function useCalendlyModalDisplay() {
  const [modalRoot, setModalRoot] = useState(null)
  const [rootMounted, setRootMounted] = useState(false)

  useEffect(() => {
    // set root element for modal to be displayed in
    const root = document.getElementById('modal-location')

    if (root) {
      setRootMounted(true)
      setModalRoot(root)
    }
  }, [])

  useEffect(() => {
    // hide shade
    const overlay = document.querySelector('.calendly-overlay')

    if (overlay) {
      overlay.style.background = 'transparent'
    }
  }, [rootMounted])

  return { modalRoot, rootMounted }
}
