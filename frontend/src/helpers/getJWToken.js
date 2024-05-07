import { Cookies } from 'quasar'

export default function getJWToken () {
  return Cookies.get('token')
}
