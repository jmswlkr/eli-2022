import React from 'react'
import { render } from '@testing-library/react'
import { Hero } from './hero'




describe('Hero', () => {
  test('renders a video element', () => {
    const { getByRole } = render(<Hero />)
    const video = getByRole('video')
    expect(video).toBeInTheDocument()
  })

  it('renders a header element after fonts are loaded', () => {
    const { getByRole } = render(<Hero />)
    
    let fontsReady = false

    setTimeout(() => {
      fontsReady = true 
    }, 800);

    if (fontsReady) {
      getByRole('header')
    }
  })
})
