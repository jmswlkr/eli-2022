import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Hero } from './hero'

describe('the hero component.', () => {
  // it('renders the header', () => {
  //   render(<Hero />);

  //   const header = screen.getByRole('heading')
  //   console.log('header children: ', [...header.children]);
    
  //   expect(header).toBeInTheDocument()
  // })

  test('should render the correct header text', () => {
    const { getByText } = render(<Hero />)
    expect(getByText(/About the/i)).toBeInTheDocument()
    expect(getByText(/Embodied Learning/i)).toBeInTheDocument()
    expect(getByText(/Institute/i)).toBeInTheDocument()
  })

  test('should render the image with the correct alt text', () => {
    const { getByAltText } = render(<Hero />)
    expect(
      getByAltText(
        /3 travelers stand silhoutted in front of a blue sky over an orange sunset in a hazy valley/i
      )
    ).toBeInTheDocument()
  })

  test('should render the container element', () => {
    const { getByTestId } = render(<Hero />)
    expect(getByTestId('hero-container')).toBeInTheDocument()
  })

  test('should render the textWrap element', () => {
    const { getByTestId } = render(<Hero />)
    expect(getByTestId('text-wrap')).toBeInTheDocument()
  })

  test('should render the header element', () => {
    const { getByTestId } = render(<Hero />)
    expect(getByTestId('header')).toBeInTheDocument()
  })

  test('should render the imageWrap element', () => {
    const { getByTestId } = render(<Hero />)
    expect(getByTestId('image-wrap')).toBeInTheDocument()
  })

  test('should render the image element', () => {
    const { getByAltText } = render(<Hero />)
    expect(
      getByAltText(
        /3 travelers stand silhoutted in front of a blue sky over an orange sunset in a hazy valley/i
      )
    ).toBeInTheDocument()
  })
})