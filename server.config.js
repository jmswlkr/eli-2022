const env = process.env.NODE_ENV
const isDev = env === 'development'

export const server = isDev
  ? 'http://localhost:3456/'
  : 'https://embodiedlearninginstitute.com/'
