// @flow
import { auth } from 'utils'

export const constants = {
  // TODO: Setup environment variables.
  baseUrl: process.env.API_URL || 'https://localhost:8080.com/api'
}

export const getHeaders = (endpoint: string, method: string) => {
  if (method === 'GET') {
    return {
      Authorization: auth.get()
    }
  }
  if (method === 'POST' && endpoint !== 'login') {
    return {
      'Content-Type': 'application/json',
      Authorization: auth.get()
    }
  }
  return {
    'Content-Type': 'application/json'
  }
}
