import '@testing-library/jest-dom/extend-expect'

Object.defineProperty(document, 'fonts', {
  value: { ready: Promise.resolve({}) },
})