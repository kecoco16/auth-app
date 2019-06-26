// @flow
import { constants, getHeaders } from './config'

const get = (endpoint: string) =>
  new Promise(async (resolve: Function, reject: Function) => {
    try {
      const method = 'GET'
      const request = await window.fetch(`${constants.baseUrl}/${endpoint}`, {
        method,
        headers: getHeaders(endpoint, method)
      })

      if (!request.ok) {
        const { error } = await request.json()
        const { code } = error
        throw new Error(code)
      }

      const response = await request.json()
      resolve(response)
    } catch (err) {
      if (!err.message || err.message === 'Network request failed') {
        return reject(new Error('w-0-0-0').message)
      }

      reject(err.message)
    }
  })

const post = (endpoint: string, data: Object) =>
  new Promise(async (resolve: Function, reject: Function) => {
    try {
      const method = 'POST'
      const request = await window.fetch(`${constants.baseUrl}/${endpoint}`, {
        method,
        body: JSON.stringify(data),
        headers: getHeaders(endpoint, method)
      })

      const response = await request.json()

      if (!request.ok) {
        throw new Error(response.message)
      }

      resolve(response)
    } catch ({ message }) {
      reject(message)
    }
  })

export default {
  get,
  post
}
