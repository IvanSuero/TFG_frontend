import { Cookies } from 'quasar'

export function getJWToken () {
  return Cookies.get('token')
}

export function getUsername () {
  return Cookies.get('username')
}
