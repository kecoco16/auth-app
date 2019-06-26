// @flow
const key = 'auth'

const set = (value: Object) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

const get = () => {
  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  } catch (error) {
    return null
  }
}

const clean = () => {
  window.localStorage.setItem(key, '')
}

const isValid = () => {
  try {
    const value = window.localStorage.getItem(key)
    return value ? true : false
  } catch (error) {
    return false
  }
}

export default { set, get, clean, isValid }
